import React from 'react'
import * as firebase from 'firebase'
import { title, label, formStyle, inputStyle, buttonStyle, buttonDivStyle, body, signupDiv } from './styles.css'
import { Link } from 'react-router'

class DonorSignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
      pickuptime: '',
      boxes: -1,
      vegnonveg: '',
      people: -1
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
    this.handlevegChange = this.handlevegChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleLocationChange(event){
    this.setState({ location: event.target.value, pickuptime: this.state.pickuptime, boxes: this.state.boxes, vegnonveg: this.state.vegnonveg, people: this.state.people})
  }

  handleTimeChange(event){
    this.setState({ location: this.state.location, pickuptime: event.target.value, boxes: this.state.boxes, vegnonveg: this.state.vegnonveg, people: this.state.people})
  }

  handleBoxChange(event){
    this.setState({ location: this.state.location, pickuptime: this.state.pickuptime, boxes: event.target.value, vegnonveg: this.state.vegnonveg, people: this.state.people})
  }

  handlevegChange(event){
    this.setState({ location: this.state.location, pickuptime: this.state.pickuptime, boxes: this.state.boxes, vegnonveg: event.target.value, people: this.state.people})
  }

  handlePeopleChange(event){
    this.setState({ location: this.state.location, pickuptime: this.state.pickuptime, boxes: this.state.boxes, vegnonveg: this.state.vegnonveg, people: event.target.value})
  }

  onSubmit(event){
    firebase.database().ref('/pickUp').set({
      location: this.state.location,
      pickuptime: this.state.pickuptime,
      boxes: this.state.boxes,
      vegnonveg: this.state.vegnonveg,
      people: this.state.people,
    })
  }

  render(){
    return(
      <div className={body}>
        <div className={title}>Login</div>
        <form onSubmit={this.onSubmit} className={formStyle}>
          <div className={label}>
            <label>
              Where are you located?
              <br></br>
              <input type="text" value={this.state.email} onChange={this.handleEmailChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              What time would you like the pickup to occur?
              <br></br>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              How many boxes of food?
              <br></br>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Is it veg or non-veg?
              <br></br>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              How many people will this feed?
              <br></br>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className={inputStyle}/>
            </label>
          </div>
          <div className={buttonDivStyle}>
            <Link to="thanks" style={{ textDecoration: 'none', color: '#fff' }}><input type="submit" value="Submit" className={buttonStyle} /></Link>
          </div>
        </form>
      </div>
    )
  }
}

export default DonorSignUp;
