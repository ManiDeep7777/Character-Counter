import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export const CountDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffc533;
  padding: 10px;
`

export const HeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: bold;
  font-size: 45px;
  line-height: 50px;
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 50vw;
`

export const UserInputContainer = styled.ul`
  padding: 10px;
`
export const displayUserInput = styled.p`
  font-family: 'Roboto';
  color: #0f172a;
  font-weight: 600;
  font-size: 20px;
`

export const CharacterInputCounterContainer = styled.div`
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50vw;
`

export const InputContainerHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffbf1f;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const InputContainer = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
`
export const Input = styled.input`
  outline: none;
  padding-left: 15px;
  margin-right: 10px;
  height: 50px;
  width: 30vw;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
  background-color: #ffffff;
`
export const Button = styled.button`
  background-color: #ffbf1f;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 15px;
  padding: 10px 15px 10px 15px;
  width: 90px;
  border: none;
  border-radius: 6px;
`
