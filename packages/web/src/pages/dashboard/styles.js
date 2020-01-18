import styled from 'styled-components'
import { Colors } from '../../styles/colors'
import { darken } from 'polished'

export const DashBoardContainer = styled.div`
  width: 100%;
  min-height: 100%;
`
export const DashBoardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: ${Colors.DARK_GRAY};
  cursor: default;
  hr {
    width: 200px;
    margin-top: 10px;
    border-bottom: 2px solid ${Colors.DAINTREE};
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid ${Colors.WHITE};
    top: 0;
    right: 30px;
    background: none;
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.GREY_31};
    svg {
      margin-left: 5px;
    }
    &:hover {
      color: ${darken(0.1, Colors.GREY_31)};
      border: 2px solid ${Colors.GREY_31};
    }
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 220px;
    background: none;
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.GREEN};
    padding: 8px;
    border: 2px solid ${Colors.GREEN};
    border-radius: 4px;
    svg {
      margin-left: 5px;
    }
    &:hover {
      background-color: ${darken(0.1, Colors.GREEN)};
      color: ${Colors.WHITE};
    }
  }
`
export const DashBoardContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  hr {
    width: 200px;
    border-bottom: 2px solid ${Colors.DAINTREE};
  }
`
