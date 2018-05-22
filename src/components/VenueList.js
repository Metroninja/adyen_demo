import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Venue } from './';

export default class VenueList extends Component {

  static propTypes = {
    venues: PropTypes.array,
  };

  render() {
    const { venues } = this.props;
    return (
      <section className="venue-list">
      {!venues && (<h4>Waiting for venues...</h4>)}
      {!!venues && venues.length === 0 && (<h4>no results</h4>)}
      {!!venues && venues.map((v, index) => <Venue venue={v.venue} key={v.referralId} alt={index % 2} />)}
      </section>
    )
  }
}
