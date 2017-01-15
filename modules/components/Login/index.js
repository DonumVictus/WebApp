import React from 'react'
import { title, label, formStyle, inputStyle, buttonStyle, buttonDivStyle, body, signupDiv } from './styles.css'
import * as firebase from 'firebase'
import { Link, browserHistory } from 'react-router'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmailChange(event){
    this.setState({email: event.target.value, password: this.state.password});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value, email: this.state.email});
  }

  onSubmit(event){
    firebase.auth().signInWithEmailAndPassword('jack_rosenthal@gmail.com', 'jrosenthal123').catch(function(error) {
      console.log(error)
      if(error==null){
        var user = firebase.auth().currentUser;
        var database = firebase.database();
        uid = user.uid;
        database.ref('users/'+uid).set({
          username: 'testing'
        })
      }else{
        alert(error.message)
        alert('There was an error in authentication! Please try again.')
      }
    });
    event.preventDefault();
  }

  render(){
    console.log(this.props.params.name)
    if(this.props.params.type==='donor'){
      var link =  (<Link to='donorsignup' style={{ textDecoration: 'none', color: '#fff' }}><input type="submit" value="Submit" className={buttonStyle} /></Link>)
    }else{
      var link = (<Link to='nextpickup' style={{ textDecoration: 'none', color: '#fff' }}><input type="submit" value="Submit" className={buttonStyle} /></Link>)
    }
    return(
      <div className={body}>
        <div className={title}>Login</div>
        <form onSubmit={this.onSubmit} className={formStyle}>
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
          <div className={buttonDivStyle}>
            {link}
          </div>
        </form>
        <div>
          <Link to="signup" style={{ textDecoration: 'none', color: '#fff' }} className={signupDiv}>No account yet? Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default Login;
