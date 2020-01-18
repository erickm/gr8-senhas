import React, { useState, useEffect, useMemo } from 'react'
import {
  PanelContainer,
  PanelCodeContent,
  PanelContent,
  PanelCodeDiv,
  PanelListContent,
  PanelAttendantDiv,
  PanelListDiv,
  PanelListBox,
  PanelCodeDate,
  PanelDiv,
} from './styles'
import socketIo from 'socket.io-client'
import api from '../../services/api'
import { useSelector } from 'react-redux'

const CodePanel = () => {
  const [codes, setCodes] = useState([])
  const [hour, setHour] = useState('00:00:00')
  const user_id = useSelector(state => state.user.profile.id)

  const socket = useMemo(
    () => socketIo(process.env.APP_URL, { query: { user_id } }),
    [user_id]
  )
  useEffect(() => {
    document.getElementById('audio_alert').pause()
    document.getElementById('audio_alert').currentTime = 0
    document.getElementById('audio_alert').play()
    socket.on('socketCode', socketCode => {
      if (codes !== socketCode) {
        setCodes(socketCode)
      }
    })
  }, [socket, codes])

  useEffect(() => {
    const handleOldCode = async () => {
      const { data } = await api.post('codes/list', {
        user_id,
      })
      if (data) {
        setCodes(data)
      }
    }
    handleOldCode().catch(e => console.error(e))
  }, [user_id])

  const handleDate = () => {
    const dayName = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ]
    const monName = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Agosto',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]
    const now = new Date()
    return (
      dayName[now.getDay()] +
      ', ' +
      now.getDate() +
      ' de ' +
      monName[now.getMonth()] +
      ' de ' +
      now.getFullYear()
    )
  }

  const handlerHour = () => {
    const pad = num => {
      return num < 10 ? '0' + num : num
    }
    const now = new Date()
    return [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(pad)
      .join(':')
  }

  useEffect(() => {
    setTimeout(() => {
      setHour(handlerHour)
    }, 1000)
  }, [hour])

  return (
    <PanelContainer>
      <PanelContent>
        <strong>Painel</strong>
        <PanelDiv>
          <PanelCodeContent>
            <PanelCodeDiv>
              <label>Senha:</label>
              <strong>{codes.length > 0 && codes[0].code}</strong>
            </PanelCodeDiv>
            <PanelAttendantDiv>
              <label>Atendente:</label>
              <strong>{codes.length > 0 && codes[0].worker.name}</strong>
            </PanelAttendantDiv>
          </PanelCodeContent>
          <PanelListContent>
            <label>Últimas Chamadas</label>
            {codes.length > 0 &&
              codes.map((item, index) => {
                if (index < 1 || index > 5) return null
                return (
                  <PanelListDiv key={index}>
                    <PanelListBox>
                      <label>Senhas</label>
                      <strong>{item.code}</strong>
                    </PanelListBox>
                    <PanelListBox>
                      <label>Atendente</label>
                      <div>{item.worker.name}</div>
                    </PanelListBox>
                  </PanelListDiv>
                )
              })}
          </PanelListContent>
        </PanelDiv>
        <PanelCodeDate>
          {handleDate()}
          <div>Hora: {hour}</div>
        </PanelCodeDate>
      </PanelContent>
      <audio id="audio_alert" src={require('../../assets/sounds/alert.mp3')} />
    </PanelContainer>
  )
}

export default CodePanel
