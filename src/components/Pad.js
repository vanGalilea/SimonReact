import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Pad extends PureComponent {
  static PropTypes = {
    color: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  }

  onClick = (event) =>{
    this.props.sound.play()
  }

  render() {
    return (
      <div className={this.props.color} onClick={this.onClick}> 
      </div>
    );
  }
}

export default Pad;
