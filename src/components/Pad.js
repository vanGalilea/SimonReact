import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Pad extends PureComponent {
  static PropTypes = {
    color: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  }

  onClick = (event) =>{
    const { color, sound } = this.props
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

export default Pad;
