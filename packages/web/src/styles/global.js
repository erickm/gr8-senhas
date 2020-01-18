import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { Colors } from './colors'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${Colors.WHITE};
  }
  body, input, button {
    font: 16px 'Roboto', sans-serif;
    color: ${Colors.GREY_11};
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
