import React from 'react'
import Title from 'react-title-component'
import * as firebase from 'firebase'

class App extends React.Component{
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyDeOtY-OVXWU_lJvsQMY2cEMnXXQRETr7I",
      authDomain: "donumvictus.firebaseapp.com",
      databaseURL: "https://donumvictus.firebaseio.com",
      storageBucket: "donumvictus.appspot.com",
      messagingSenderId: "103550522246"
    };
    try{
      firebase.initializeApp(config);
    }catch(e){
      firebase.app().delete().then(function(){
        firebase.initializeApp(config);
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
