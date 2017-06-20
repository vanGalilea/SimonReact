import React, { PureComponent } from 'react'
import Pad from './Pad'
import './SimonGame.css'

const sounds = [
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
]

class SimonGame extends PureComponent {

  render() {
    return(
      <div className='flex-container'>
        <Pad color="yellow" sound={sounds[0]}/>
        <Pad color="blue" sound={sounds[1]}/>
        <Pad color="red" sound={sounds[2]}/>
        <Pad color="green" sound={sounds[3]}/>
        <div className="center"></div>
      </div>
    )
  }
}

export default SimonGame
