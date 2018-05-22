import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getVenues } from './actions/venues';
import { Filters, Map, VenueList } from './components';
import './styles/main.css';

class App extends Component {
  static propTypes = {
    peopleHereFilter: PropTypes.bool,
    venues: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      position: null
    }
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      this.setState({position});
      this.props.getVenues({coords});
    });
  }

  filterPass(venues) {
    let filtered = venues;
    if(this.props.peopleHereFilter && venues) {
      filtered = filtered.filter(v => v.venue.hereNow.count).sort(
        (a,b) => a.venue.hereNow - b.venue.hereNow );
    }
    return filtered;
  }
  
  render() {
    const { venues } = this.props;
    const filteredVenues = this.filterPass(venues);
    const { position } = this.state;
    return (
      <section className="App grid-container">
        <VenueList venues={filteredVenues} />
        <section className="map-container">
          <Filters position={position} />
          <Map position={position} venues={filteredVenues} />
        </section>
      </section>
    );
  }
}

export default connect( 
  state => ({
    venues: state.venues.list,
    peopleHereFilter: state.venues.peopleHereFilter,
  }),
  dispatch => bindActionCreators({ getVenues }, dispatch)
)(App);
