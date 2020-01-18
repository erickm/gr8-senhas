import styled from 'styled-components'
import { Colors } from '../../../../styles/colors'
import { darken } from 'polished'

export const AttendantsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 250px;
  max-width: 250px;
  min-height: 200px;
  margin: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  cursor: default;
`
export const AttendantsUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${Colors.DAINTREE};
  label {
    width: 100%;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
  }
  > strong {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
  }
  hr {
    width: 150px;
    margin-top: 8px;
    border-bottom: 2px solid ${Colors.DAINTREE};
  }
`
export const AttendantsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  strong {
    color: ${Colors.DAINTREE};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    width: 20px;
  }
`
export const AttendantsCodes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 10px;
`
export const AttendantsOldCodes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    color: ${Colors.DAINTREE};
    font-size: 12px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    margin-top: 3px;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.DAINTREE};
    background-color: ${Colors.WHITE};
    border-radius: 2px;
  }
`
export const AttendantsNewCodes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    color: ${Colors.DAINTREE};
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 120px;
    font-size: 60px;
    font-weight: bold;
    color: ${Colors.RED};
    background-color: ${Colors.WHITE};
    border-radius: 2px;
  }
`
export const AttendantsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin: 20px 0 0 0;
  background-color: ${Colors.GREEN};
  color: ${Colors.WHITE};
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${darken(0.08, Colors.GREEN)};
  }
`
