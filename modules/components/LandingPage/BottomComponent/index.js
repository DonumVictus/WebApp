import React from 'react'
import { body, title, smallerTitle, buttonDivStyle, buttonStyleRight, buttonStyleLeft } from './styles.css'

export default React.createClass({
  render(){
    return (
      <div className={body}>
        <div className={title}>Interested?</div>
        <div className={buttonDivStyle}>
          <button className={buttonStyleLeft}>I am a donor</button>
          <button className={buttonStyleRight}>I am a driver</button>
        </div>
      </div>
    )
  }
})
