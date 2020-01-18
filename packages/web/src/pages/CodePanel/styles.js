import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.DAINTREE};
`
export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  > strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${Colors.WHITE};
    color: ${Colors.DAINTREE};
    font-weight: bold;
    font-size: 40px;
  }
`
export const PanelDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const PanelCodeContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const PanelCodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  > label {
    font-size: 40px;
    color: ${Colors.WHITE};
  }
  > strong {
    margin-top: 20px;
    font-size: 200px;
    background-color: ${Colors.DAINTREE};
    color: ${Colors.WHITE};
  }
`
export const PanelAttendantDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  > label {
    font-size: 40px;
    color: ${Colors.WHITE};
  }
  > strong {
    background-color: ${Colors.DAINTREE};
    color: ${Colors.WHITE};
    font-size: 80px;
  }
`
export const PanelCodeDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${Colors.WHITE};
  color: ${Colors.DAINTREE};
  font-weight: bold;
  font-size: 28px;
  div {
    margin-left: 20px;
  }
`
export const PanelListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  border: 1px solid ${Colors.WHITE};
  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${Colors.LIGHT_DAINTREE};
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 24px;
  }
`
export const PanelListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: auto;
  padding: 10px;
  background-color: ${Colors.LIGHT_DAINTREE};
  border-top: 2px solid ${Colors.DAINTREE};
`
export const PanelListBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  > label {
    color: ${Colors.WHITE};
    text-align: start;
  }
  > strong {
    color: ${Colors.WHITE};
    font-size: 48px;
  }
  > div {
    color: ${Colors.WHITE};
    font-size: 34px;
    font-weight: bold;
  }
`
