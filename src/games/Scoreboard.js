import React, { PureComponent } from 'react'

class Scoreboard extends PureComponent {

  renderPlayerStat(player){
    player.lives < 1 ? player.lives = "Game Over!" : player.lives

    return(
      <div className="listdiv">
        <li className="lists"><p>{player.name}</p></li>
        <p className="lists2">Score: {player.score}</p>
        <p className="lists2">Lives left: {player.lives}</p>
      </div>
   )
  }

  render() {
    const { players, turn, round } = this.props.game
    return(
      <div className='flex-container'>

      <ul>
        <li className="lists3"><h1>{players[turn].name}'s turn!</h1></li>
        <li className="lists3"><h1>Round <div className="inlist3">{round+1}</div></h1></li>
          { players.map((player) => {return this.renderPlayerStat(player)}) }
        </ul>
      </div>
    )
  }
}

export default Scoreboard
