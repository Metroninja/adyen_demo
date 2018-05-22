import React, { Component } from 'react';
import PropTypes from 'prop-types';


const google = window.google;

export default class MapPin extends Component {

  static propTypes = {
    name: PropTypes.string,
    map: PropTypes.object,
    position: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this._marker = null;
  }

  componentDidMount() {
    const { map, name, position } = this.props;
    this._marker = new google.maps.Marker({
      position,
      map,
      name,
      zIndex: 200,
    });
  }

  componentWillUnmount() {
    this._marker.setMap(null);
  }

  render() {
    return <div />;
  }
}
