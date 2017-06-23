import React, { PureComponent } from 'react'

class SimonGame extends PureComponent {

  render() {
    const { players, turn, round } = this.props.game
    return(
      <div className='flex-container'>
        <h2>{players[turn].name}'s turn</h2>
        <h3>Round {round}</h3>

      </div>
    )
  }
}

export default SimonGame
