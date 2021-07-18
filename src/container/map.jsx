import React,{Component} from 'react';
import Header from "../component/header";
import './map.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 21.7679, lng:  78.8718},
                {latitude: 28.207609, longitude: 79.826660},
                {latitude: 17.123184, longitude: 79.208824},
                {latitude: 23.473324, longitude: 77.947998},
                {latitude: 29.238478, longitude: 76.431885},
                {latitude: 29.065773, longitude: 76.040497}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

  
    render() {
      return (
          <>
          <Header/>
          <Map
            google={this.props.google}
            zoom={5}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            {this.displayMarkers()}
          </Map>
          </>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUmEn2oBrvD4NClbNyhZHQnaijIvAIaqw'
  })(MapContainer);


