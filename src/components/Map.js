import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MapPin } from './';
const google = window.google;

export default class Map extends Component {

  static propTypes = {
    position: PropTypes.object,
    venues: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
    }
    this._mapRef = null;
    this._markers = [];
  }
  componentDidMount() {
    this.loadMapControl();
  }

  loadMapControl() {
    const { position } = this.props;

    if (typeof google !== 'undefined' && (position)) {
      let yourPosition = { lat: position.coords.latitude, lng: position.coords.longitude  };
      this._map = new google.maps.Map(this._mapRef, {
        center: yourPosition,
        zoom: 13,
      });
    } else {
      setTimeout(() => this.loadMapControl(), 500);
    }
  }

  render() {
    return (
      <section className="map" ref={m => this._mapRef = m}>
        {!this.props.position && (
          <h3>Fetching user location...</h3>
        )}
        {!!this._map && this.props.position && (
          <MapPin 
            name="You" 
            position={{ lat: this.props.position.coords.latitude, lng: this.props.position.coords.longitude }} 
            map={this._map}
          />
        )}
        {!!this._map && this.props.venues && this.props.venues.map((v, index) => (
          <MapPin name={v.venue.name} position={v.venue.location} map={this._map} key={v.referralId} />
        ))}
      </section>
    )
  }
}
