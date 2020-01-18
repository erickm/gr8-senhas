import Worker from '../models/Worker'

class WorkerController {
  async index(req, res) {
    const { user_id } = req.body
    const workers = await Worker.findAll({
      attributes: ['id', 'name'],
      where: {
        user_id,
        active: true,
      },
    })
    return res.json(workers)
  }
}
export default new WorkerController()
