import * as Yup from 'yup'
import Code from '../models/Code'
import Worker from '../models/Worker'

class CodeController {
  async index(req, res) {
    const { worker_id, user_id } = req.body
    const codes = await Code.findAll({
      where: {
        worker_id,
        user_id,
      },
      order: [['id', 'DESC']],
      limit: 2,
    })

    if (codes.length === 0) {
      return res.status(400).json({ error: 'requisição vazia' })
    }
    if (codes.length < 2) {
      return res.json({
        oldCode: 0,
        newCode: codes[0].code,
      })
    }
    return res.json({
      oldCode: codes[1].code,
      newCode: codes[0].code,
    })
  }
  async list(req, res) {
    const { user_id } = req.body

    const codes = await Code.findAll({
      attributes: ['id', 'code', 'user_id'],
      where: {
        user_id,
      },
      include: [
        {
          attributes: ['id', 'name'],
          model: Worker,
          as: 'worker',
        },
      ],
      order: [['id', 'DESC']],
      limit: 8,
    })
    return res.json(codes)
  }

  async store(req, res) {
    const { worker_id, user_id } = req.body
    const workerExists = await Worker.findByPk(worker_id)

    if (!workerExists) {
      return res.status(400).json({ error: 'worker does not exist.' })
    }

    const dbCode = await Code.findOne({
      attributes: ['code'],
      order: [['id', 'DESC']],
    })

    let code = dbCode ? dbCode.code : 0

    const dbOldCode = await Code.findOne({
      attributes: ['id', 'code'],
      where: {
        worker_id,
        user_id,
      },
      order: [['id', 'DESC']],
    })
    const oldCode = dbOldCode ? dbOldCode : { id: 0, code: 0 }

    if (code === 999) {
      code = 0
    }
    let newCode = code + 1

    await Code.update(
      { status: 'finished', active: false },
      { where: { id: oldCode.id } }
    )
    const body = await Code.create({
      code: newCode,
      worker_id,
      user_id,
      status: 'progress',
    })

    const ownerSocket = req.connectedUsers[user_id]

    if (ownerSocket) {
      const socketCode = await Code.findAll({
        attributes: ['id', 'code', 'user_id'],
        where: {
          user_id,
        },
        include: [
          {
            attributes: ['id', 'name'],
            model: Worker,
            as: 'worker',
          },
        ],
        order: [['id', 'DESC']],
        limit: 8,
      })
      req.io.to(ownerSocket).emit('socketCode', socketCode)
    }

    const response = {
      newCode: body.code,
      oldCode: oldCode.code,
    }
    return res.json(response)
  }
}
export default new CodeController()
