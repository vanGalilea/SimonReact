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

let yellow = "yellow"
let blue = "blue"
let green = "green"
let red = "red"

class SimonGame extends PureComponent {
  componentWillMount() {
    const { games, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gamesId } = this.props.params
    const game = this.props.games.filter((g) => (g._id === this.props.params.gamesId))[0]

    if (!game) fetchGames()
    getCurrentGame(gamesId)
    if (!subscribed) subscribeToGames()

 }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  demo() {

   const game = this.props.games.filter((g) => (g._id === this.props.params.gamesId))[0]

   const { round, pads } = game
   for ( let i = 0; i <= round; i++) {
     console.log(pads[i].color)

      switch (pads[i].color) {
        case "yellow":
          sounds[0].playbackRate = 0.6
          sounds[0].play()
          setTimeout(() =>{ yellow="yellow anim" }, 500)
          yellow ="yellow"
          this.sleep(2000)


        case "blue":
          sounds[1].playbackRate = 0.6
          sounds[1].play()
          setTimeout(() =>{ blue="blue anim" }, 500)
          blue ="blue"
          this.sleep(2000)

        case "red":
          sounds[2].playbackRate = 0.6
          sounds[2].play()
          setTimeout(() =>{ red="red anim" }, 500)
          red ="red"
          this.sleep(2000)

        case "green":
          sounds[3].playbackRate = 0.6
          sounds[3].play()
          setTimeout(() =>{ green="green anim" }, 500)
          green ="green"
          this.sleep(2000)

        default:
          sounds[3].playbackRate = 0.6
          sounds[3].play()
          this.sleep(2000)
      }
   }
 }

  render() {
    const game = this.props.games.filter((g) => (g._id === this.props.params.gamesId))[0]

    return(
      <div>

        <div className='flex-container'>
          <div className="scores"><Scoreboard game={game} /></div>
          <div className="backstuff"></div>
          <div className="back"></div>
          <Pad color={yellow} sound={sounds[0]}/>
          <Pad color={blue} sound={sounds[1]}/>
          <Pad color={red} sound={sounds[2]}/>
          <Pad color={green} sound={sounds[3]}/>
          <button onClick={() =>{this.demo()}}>PLAY</button>
          <JoinGameDialog className="scores" />
          <div className="center"></div>

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
