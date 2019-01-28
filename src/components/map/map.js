import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 55.369312,
      lng: 10.428229
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDvvRL2tvcsZ8_BePHHzVJWeoxwmy_eBHQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={55.369312}
            lng={10.428229}
            text={'Here you are'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
