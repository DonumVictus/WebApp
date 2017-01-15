import React from 'react'
import * as firebase from 'firebase'
import { title, label, formStyle, inputStyle, buttonStyle, buttonDivStyle, body, signupDiv } from './styles.css'
import { Link } from 'react-router'

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      isDonor: true,
      isDriver: true,
      confirmPassword: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleisDonorChange = this.handleisDonorChange.bind(this);
    this.handleisDriverChange = this.handleisDriverChange.bind(this);
    this.handleconfirmPassChange = this.handleconfirmPassChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmailChange(event){
    this.setState({ email: event.target.value, password: this.state.password, username: this.state.username, isDonor: this.state.isDonor, isDriver: this.state.isDriver, confirmPassword: this.state.confirmPassword})
  }

  handlePasswordChange(event){
    this.setState({ email: this.state.email, password: event.target.value, username: this.state.username, isDonor: this.state.isDonor, isDriver: this.state.isDriver, confirmPassword: this.state.confirmPassword})
  }

  handleUserNameChange(event){
    this.setState({ email: this.state.email, password: this.state.password, username: event.target.value, isDonor: this.state.isDonor, isDriver: this.state.isDriver, confirmPassword: this.state.confirmPassword})
  }

  handleisDonorChange(event){
    this.setState({ email: this.state.email, password: this.state.password, username: this.state.username, isDonor: !this.state.isDonor, isDriver: this.state.isDriver, confirmPassword: this.state.confirmPassword})
  }

  handleisDriverChange(event){
    this.setState({ email: this.state.email, password: this.state.password, username: this.state.username, isDonor: this.state.isDonor, isDriver: !this.state.isDriver, confirmPassword: this.state.confirmPassword})
    console.log(this.state.isDriver)
  }

  handleconfirmPassChange(event){
    this.setState({ email: this.state.email, password: this.state.password, username: this.state.username, isDonor: this.state.isDonor, isDriver: this.state.isDriver, confirmPassword: event.target.value})
  }

  onSubmit(event){
    if(this.state.password===this.state.confirmPassword){
      firebase.auth().createUserWithEmailandPassword(this.state.email, this.state.password).catch(function(error){
        alert(error.message)
        if(error==null){
          var database = firebase.database();
          var user = firebase.auth().currentUser;
          uid = user.uid;
          database.ref('users/' + uid).set({
            username: this.state.username,
            isDonor: this.state.isDonor,
            isDriver: this.state.isDriver
          })
        }else{
          alert('ERROR!!!')
        }
      })
    }else{
      alert("Passwords don't match!");
    }
  }

  render(){
    return (
      <div className={body}>
        <div className={title}>Sign Up</div>
        <form onSubmit={this.onSubmit} className={formStyle}>
          <div className={label}>
            <label>
              Username:
              <br></br>
              <input type="text" value={this.state.username} onChange={this.handleUserNameChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Email:
              <br></br>
              <input type="text" value={this.state.email} onChange={this.handleEmailChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Password:
              <br></br>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Confirm Password:
              <br></br>
              <input type="password" value={this.state.confirmPassword} onChange={this.handleconfirmPassChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Donor?:
              <br></br>
              <input type="checkbox" value={this.state.isDonor} onChange={this.handleisDonorChange} className={inputStyle}/>
            </label>
          </div>
          <div className={label}>
            <label>
              Driver?:
              <br></br>
              <input type="checkbox" value={this.state.isDriver} onChange={this.handleisDriverChange} className={inputStyle}/>
            </label>
          </div>
          <div className={buttonDivStyle}>
            <Link to="settings" style={{ textDecoration: 'none', color: '#fff'}}><input type="submit" value="Submit" className={buttonStyle} /></Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
