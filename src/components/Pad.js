import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import pushPad from '../actions/games/pushPad'
import { connect } from 'react-redux'

class Pad extends PureComponent {
  static PropTypes = {
    color: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  }

  onClick = (event) =>{
    const { _id } = this.props.game
    const { color, sound } = this.props
    this.props.pushPad(_id, color)
    let padDiv = event.target
    padDiv.className = color + " anim"
    sound.playbackRate = 0.6
    sound.play()
    setTimeout(() =>{ padDiv.className = color }, 500)
  }


  render() {
    return (
      <div ref="padDiv" className={this.props.color} onClick={this.onClick}>
      </div>
    );
  }
}

const mapStateToProps = ({ currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  return {
    game,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, { pushPad })(Pad)
