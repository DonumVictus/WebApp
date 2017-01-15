import React from 'react'
import { body, title, smallerTitle, buttonDivStyle, buttonStyleRight, buttonStyleLeft } from './styles.css'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return (
      <div className={body}>
        <div className={title}>Interested?</div>
        <div className={buttonDivStyle}>
          <button className={buttonStyleLeft}><Link to={'login/donor'} style={{ textDecoration: 'none' , color: '#fff' }}>I am a donor</Link></button>
          <button className={buttonStyleRight}><Link to={'login/driver'} style={{ textDecoration: 'none', color: '#fff'  }}>I am a driver</Link></button>
        </div>
      </div>
    )
  }
})
