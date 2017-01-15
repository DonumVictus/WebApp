import React from 'react'
import { body, title, smallerTitle, imgStyle, linkStyle, linkStyleTwo } from './styles.css'
import box from './box.png'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return (
      <div className={body}>
        <div>
          <div className={linkStyle}><Link to="signup" style={{ textDecoration: 'none' , color: '#fff' }}>Sign Up</Link></div>
          <div className={linkStyleTwo}><Link to="login" style={{ textDecoration: 'none' , color: '#fff' }}>Login</Link></div>
        </div>
        <div className={title}>The Gift of Food</div>
        <div className={smallerTitle}>Providing food for those who need it.</div>
        <img className={imgStyle} src={box} />
      </div>
    )
  }
})
