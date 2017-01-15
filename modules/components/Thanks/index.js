import React from 'react'
import { body, title } from './styles.css'

export default React.createClass({
  render(){
    return(
      <div className={body}>
        <div className={title}>
          Thanks for submitting! We will get back to you soon.
        </div>
      </div>
    )
  }
})
