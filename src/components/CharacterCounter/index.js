import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import UserInput from '../UserInput'
import './index.css'

import {
  AppContainer,
  CountDetailsContainer,
  HeadingContainer,
  Heading,
  DisplayContainer,
  CharacterInputCounterContainer,
  InputContainerHeading,
  InputContainer,
  UserInputContainer,
  Input,
  Button,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    displayData: [],
  }

  renderNoUserInputsView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  renderUserInputsView = () => {
    const {displayData} = this.state
    return (
      <UserInputContainer>
        <li className="displayUserInput">
          {displayData.map(eachItem => (
            <UserInput key={eachItem.id} userInputDetails={eachItem} />
          ))}
        </li>
      </UserInputContainer>
    )
  }

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  submitUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInputList = {
      id: uuidV4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      displayData: [...prevState.displayData, newUserInputList],
      userInput: '',
    }))
  }

  render() {
    const {userInput, displayData} = this.state
    console.log(displayData)
    return (
      <AppContainer>
        <CountDetailsContainer>
          <HeadingContainer>
            <Heading>
              Count the characters like a <br /> Boss...
            </Heading>
          </HeadingContainer>
          <DisplayContainer>
            {displayData.length === 0
              ? this.renderNoUserInputsView()
              : this.renderUserInputsView()}
          </DisplayContainer>
        </CountDetailsContainer>
        <CharacterInputCounterContainer>
          <InputContainerHeading>Character Counter</InputContainerHeading>
          <InputContainer onSubmit={this.submitUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.getUserInput}
              placeholder="Enter the Characters here"
            />
            <Button>Add</Button>
          </InputContainer>
        </CharacterInputCounterContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
