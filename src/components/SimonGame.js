import React, { PureComponent } from 'react'
import JoinGameDialog from '../games/JoinGameDialog'
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
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gamesId } = this.props.params
    debugger

    if (!game) fetchGames()
    getCurrentGame(gamesId)
    if (!subscribed) subscribeToGames()
 }

  render() {
    return(
      <div className='flex-container'>
        <Pad color="yellow" sound={sounds[0]}/>
        <Pad color="blue" sound={sounds[1]}/>
        <Pad color="red" sound={sounds[2]}/>
        <Pad color="green" sound={sounds[3]}/>
        <div className="center"></div>

        <JoinGameDialog />
      </div>
    )
  }
}

const mapStateToProps = ({ currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  return {
    game,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(SimonGame)
