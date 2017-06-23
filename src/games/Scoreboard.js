import React, { PureComponent } from 'react'

class Scoreboard extends PureComponent {

  renderPlayerStat(player){
    player.lives < 1 ? player.lives = "Game Over!" : player.lives

    return(
      <div>
        <li><h3>{player.name}</h3></li>
        <h3>Score: {player.score}</h3>
        <h3>Lives left: {player.lives}</h3>
      </div>
   )
  }

  render() {
    const { players, turn, round } = this.props.game
    return(
      <div className='flex-container'>

      <ul>
        <li><h2>{players[turn].name}'s turn</h2></li>
        <li><h2>Round {round}</h2></li>
          { players.map((player) => {return this.renderPlayerStat(player)}) }
        </ul>
      </div>
    )
  }
}

export default Scoreboard
