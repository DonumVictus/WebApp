import React from 'react'
import { body, title, smallerTitle, imgStyle, linkStyle } from './styles.css'
import box from './box.png'

export default React.createClass({
  render(){
    return (
      <div className={body}>
        <div className={linkStyle}>Login</div>
        <div className={title}>Donum Victus</div>
        <div className={smallerTitle}>Providing food for those who need it.</div>
        <img className={imgStyle} src={box} />
      </div>
    )
  }
})
