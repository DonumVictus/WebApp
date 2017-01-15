import React from 'react';
import Title from 'react-title-component';
import { bodyblue, bodygrey, bodyimage, title, infostyle, liststyle, gradientyellowblack, gradientblackyellow, rightDiv, leftDiv, imgstyle } from './styles.css'

export default React.createClass({
  render(){
    return(
      <div className={(this.props.grey ? bodyblue: bodygrey)}>
        <div className={leftDiv}>
          <img src={this.props.imgsrc} className={imgstyle}/>
        </div>
        <div className={rightDiv}>
          <div>
            <h1 className={title}>{this.props.title}</h1>
            <ul className={liststyle}>
              {this.props.info.map((info)=>{
                return (<ol key={info.key} className={infostyle}>{info.text}</ol>);
              })}
            </ul>
          </div>
          <div className={this.props.blue ? gradientyellowblack: gradientblackyellow}></div>
        </div>
      </div>
    )
  }
})
