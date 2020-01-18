import React, { useState, useEffect } from 'react'
import {
  AttendantsButton,
  AttendantsCodes,
  AttendantsContent,
  AttendantsNewCodes,
  AttendantsOldCodes,
  AttendantsTitle,
  AttendantsUser,
} from './styles'
import api from '../../../../services/api'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Attendants = ({ attendants, workerId, index }) => {
  const [code, setCode] = useState([])
  const user_id = useSelector(state => state.user.profile.id)

  useEffect(() => {
    const handleOldCode = async id => {
      const { data } = await api.post('codes/current', {
        worker_id: id,
        user_id: user_id,
      })
      if (data) {
        setCode(data)
      }
    }
    handleOldCode(workerId).catch(e => console.error(e))
  }, [workerId, user_id])

  const handleCode = async () => {
    const { data } = await api.post('codes', { worker_id: workerId, user_id })
    setCode(data)
    toast.success('Senha gerada!')
  }
  const { newCode, oldCode } = code

  return (
    <AttendantsContent>
      <AttendantsUser>
        <AttendantsTitle>
          <label>Atendente:</label>
          <strong>{index}</strong>
        </AttendantsTitle>
        <strong>{attendants}</strong>
        <hr />
      </AttendantsUser>
      <AttendantsCodes>
        <AttendantsOldCodes>
          <label>Anterior</label>
          <div>{oldCode ? oldCode : 0}</div>
        </AttendantsOldCodes>
        <AttendantsNewCodes>
          <label>Nova Senha</label>
          <div>{newCode ? newCode : 0}</div>
        </AttendantsNewCodes>
      </AttendantsCodes>
      <AttendantsButton type="button" id={index} onClick={handleCode}>
        Proximo
      </AttendantsButton>
    </AttendantsContent>
  )
}

export default Attendants
