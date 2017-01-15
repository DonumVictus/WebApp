import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { body, title, info, settingStyle } from './styles.css'
import { Link } from 'react-router'


const GettingStartedGoogleMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 37.512177, lng: -122.201786 }}
    onClick={props.onMapClick}>
    {props.markers.map(marker => {
      return(
        <Marker
          {...marker}
        />
      )
    })}
  </GoogleMap>
));

class NextPickUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markers:[{
        position:{
          lat: 37.47189,
          lng: -122.135274,
        },
        key: 'WeHOPE',
        defaultAnimation: 2,
      }]
    }
  }

  render(){
    console.log(this.state.markers)
    return(
      <div className={body}>
        <Link to="settings" style={{ textDecoration: 'none', color: '#fff'}}><div className={settingStyle}>Settings</div></Link>
        <div className={title}>Your next pickup:</div>
        <div className={info}>Pickup is at WeHope Homeless Shelter at 7:30. You will be picking up 5 boxes of non-veg food.</div>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `75vh` }} />
          }
          mapElement={
            <div style={{ height: `75vh` }} />
          }
          markers = {this.state.markers}
        />
      </div>
    )
  }
}

export default NextPickUp;
