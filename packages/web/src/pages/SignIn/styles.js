import styled from 'styled-components'
import { Colors } from '../../styles/colors'
import { Form } from '@rocketseat/unform'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(83, 1, 0, 0.8);
`
export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 450px;
  background-color: ${Colors.WHITE};
  border-radius: 4px;
`
export const SignInTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    width: 100px;
  }
  strong {
    margin-top: 10px;
    color: ${Colors.DARK_RED};
    font-size: 20px;
    font-weight: bold;
  }
  hr {
    width: 100px;
    margin-top: 10px;
    border-bottom: 2px solid ${Colors.DARK_RED};
  }
`
export const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  button {
    width: 100%;
    height: 40px;
    margin-top: 25px;
    background-color: ${Colors.DARK_RED};
    border: none;
    border-radius: 4px;
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 18px;
  }
`
export const SignInFormInput = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid ${Colors.DARK_RED};
  width: 100%;
  height: 40px;
  margin-top: 22px;
  padding: 0 10px;
  background-color: rgb(232, 240, 254);
  border-radius: 4px 4px 0 0;
  position: relative;
  svg {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 100%;
    background: rgb(232, 240, 254);
    color: ${Colors.DARK_RED};
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: ${Colors.DARK_RED};
    border: none;
    &::placeholder {
      font-weight: bold;
      font-size: 16px;
      color: ${Colors.DARK_RED};
    }
  }
  span {
    flex: 0 0 100%;
    color: ${Colors.RED};
    position: absolute;
    top: 40px;
    left: 5px;
    font-weight: 500;
  }
`
