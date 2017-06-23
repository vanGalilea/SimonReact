import React, { PureComponent } from 'react'
import JoinGameDialog from '../games/JoinGameDialog'
import Scoreboard from '../games/Scoreboard'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import Pad from './Pad'
import './SimonGame.css'

const sounds = [
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
]

class SimonGame extends PureComponent {
  componentWillMount() {
    const { games, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gamesId } = this.props.params
    const game = this.props.games.filter((g) => (g._id === this.props.params.gamesId))[0]

    if (!game) fetchGames()
    getCurrentGame(gamesId)
    if (!subscribed) subscribeToGames()
 }

  render() {
    const game = this.props.games.filter((g) => (g._id === this.props.params.gamesId))[0]

    return(
      <div>


        <div className='flex-container'>
          <div className="scores"><Scoreboard game={game} /></div>
          <div className="backstuff"></div>
          <div className="back"></div>
          <Pad color="yellow" sound={sounds[0]}/>
          <Pad color="blue" sound={sounds[1]}/>
          <Pad color="red" sound={sounds[2]}/>
          <Pad color="green" sound={sounds[3]}/>
          <JoinGameDialog className="scores" />
          <div className="center"></div>

          <JoinGameDialog className="scores" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games, subscriptions }) => {
  return {
    games,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(SimonGame)
