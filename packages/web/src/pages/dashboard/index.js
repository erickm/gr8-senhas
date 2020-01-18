import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { signOut } from '../../store/modules/auth/actions'
import { DashBoardContainer, DashBoardContent, DashBoardTitle } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Attendants from './component/Attendants'
import api from '../../services/api'
import { faSignOutAlt, faTv } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [workers, setWorkers] = useState([])
  const user_id = useSelector(state => state.user.profile.id)

  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(signOut())
  }
  useEffect(() => {
    const handlerWorkers = async () => {
      const { data } = await api.post('workers', { user_id: user_id })

      if (data.length === 0) {
        toast.error('Sem Atendentes registrados!')
      } else {
        setWorkers(data)
      }
    }
    handlerWorkers()
  }, [user_id])

  let key = ''
  document.onkeypress = evt => {
    evt = evt || window.event
    let val = String.fromCharCode(evt.keyCode || evt.which)
    key = key ? key + val : val
    setTimeout(() => {
      if (
        Number.isInteger(parseInt(key)) &&
        window.location.pathname === '/dashboard' &&
        document.getElementById(key)
      ) {
        document.getElementById(key).click()
      }
      key = ''
    }, 600)
  }

  return (
    <DashBoardContainer>
      <DashBoardTitle>
        ATENDIMENTOS
        <button onClick={handleSignOut}>
          Sair
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
        <Link to="/panel">
          Painel
          <FontAwesomeIcon icon={faTv} />
        </Link>
        <hr />
      </DashBoardTitle>
      <DashBoardContent>
        {workers.length > 0 || !workers ? (
          workers.map(({ id, name }, index) => {
            return (
              <Attendants
                key={id}
                index={index + 1}
                workerId={id}
                attendants={name}
              />
            )
          })
        ) : (
          <div>
            <h2>Sem Atendentes registados.</h2>
          </div>
        )}
      </DashBoardContent>
    </DashBoardContainer>
  )
}

export default Dashboard
