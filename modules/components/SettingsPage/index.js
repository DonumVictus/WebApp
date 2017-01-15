import React from 'react';
import * as firebase from 'firebase'
import { title, label, formStyle, inputStyle, buttonStyle, buttonDivStyle, body, signupDiv } from './styles.css'
import { Link } from 'react-router'

class SettingsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monday: false,
      tuesday: false,
      wedday: false,
      thursday: true,
      friday: false,
      saturday: true,
      sunday: true
    }
    this.handleMondayChange = this.handleMondayChange.bind(this);
    this.handleTuesdayChange = this.handleTuesdayChange.bind(this);
    this.handleWedDayChange = this.handleWedDayChange.bind(this);
    this.handleThursChange = this.handleThursChange.bind(this);
    this.handleFriChange = this.handleFriChange.bind(this);
    this.handleSatChange = this.handleSatChange.bind(this);
    this.handleSunChange = this.handleSunChange.bind(this);
  }

  handleMondayChange(event){
    this.setState({ monday: !this.state.monday, tuesday: this.state.tuesday, wedday: this.state.wedday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday});
  }

  handleTuesdayChange(event){
    this.setState({ monday: this.state.monday, tuesday: !this.state.tuesday, wedday: this.state.wedday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday});
  }

  handleWedDayChange(event){
    this.setState({ monday: this.state.monday, tuesday: this.state.tuesday, wedday: !this.state.wedday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday});
  }

  handleThursChange(event){
    this.setState({ monday: this.state.monday, tuesday: this.state.tuesday, wedday: this.state.wedday, thursday: !this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday});
  }

  handleFriChange(event){
    this.setState({ monday: this.state.monday, tuesday: this.state.tuesday, wedday: this.state.wedday, thursday: this.state.thursday, friday: !this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday});
  }

  handleSatChange(event){
    this.setState({ monday: this.state.monday, tuesday: this.state.tuesday, wedday: this.state.wedday, thursday: this.state.thursday, friday: this.state.friday, saturday: !this.state.saturday, sunday: this.state.sunday});
  }

  handleSunChange(event){
    this.setState({ monday: this.state.monday, tuesday: this.state.tuesday, wedday: this.state.wedday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: !this.state.sunday});
  }

  onSubmit(event){
    var user = firebase.auth().currentUser();
    if(user==null){
      alert("No user logged in!");
    }else{
      var database = firebase.database();
      var uid = user.uid;
      database.ref('users/'+uid+'/days available').set({
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wedday: this.state.wedday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday,
        sunday: this.state.sunday
      })
      alert('Data updated!');
    }
  }

  render(){
    return (
      <div className={body}>
        <div className={title}>Settings</div>
        <form onSubmit={this.onSubmit} className={formStyle}>
          <div className={label}>
            <label>
              Monday?:
              <br></br>
              <input type="checkbox" checked={this.state.monday} onChange={this.handleMondayChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Tuesday?:
              <br></br>
              <input type="checkbox" checked={this.state.tuesday} onChange={this.handleTuesdayChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Wednesday?:
              <br></br>
              <input type="checkbox" checked={this.state.wedday} onChange={this.handleWedDayChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Thursday?:
              <br></br>
              <input type="checkbox" checked={this.state.thursday} onChange={this.handleThursChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Friday?:
              <br></br>
              <input type="checkbox" checked={this.state.friday} onChange={this.handleFriChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Saturday?:
              <br></br>
              <input type="checkbox" checked={this.state.saturday} onChange={this.handleSatChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Sunday?:
              <br></br>
              <input type="checkbox" checked={this.state.sunday} onChange={this.handleSunChange} className={inputStyle}/>
            </label>
          </div>
          <div className={buttonDivStyle}>
            <Link to='nextPickUp' style={{ textDecoration: 'none', color: '#fff'}}><input type="submit" value="Submit" className={buttonStyle} /></Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SettingsPage
