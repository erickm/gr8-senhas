import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  SignInContainer,
  SignInContent,
  SignInForm,
  SignInFormInput,
  SignInTitle,
} from './styles'
import * as Yup from 'yup'
import { Input } from '@rocketseat/unform'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { signInRequest } from '../../store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatório'),
})

const SignIn = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password))
  }
  return (
    <SignInContainer>
      <SignInContent>
        <SignInTitle>
          <img
            src={require('../../assets/images/logo_gr8_450.svg')}
            alt="LOGO_GR8"
          />
          <hr />
          <strong>GR8 SENHAS</strong>
        </SignInTitle>
        <SignInForm schema={schema} onSubmit={handleSubmit}>
          <SignInFormInput>
            <FontAwesomeIcon icon={faUserAlt} />
            <Input type="email" name="email" placeholder="E-mail" />
          </SignInFormInput>
          <SignInFormInput>
            <FontAwesomeIcon icon={faLock} />
            <Input type="password" name="password" placeholder="Senha" />
          </SignInFormInput>
          <button type="submit">{loading ? 'CARREGANDO...' : 'ACESSAR'}</button>
        </SignInForm>
      </SignInContent>
    </SignInContainer>
  )
}

export default SignIn
