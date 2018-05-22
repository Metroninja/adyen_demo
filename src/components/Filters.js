import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getVenues, peopleFilter } from '../actions/venues';
class Filters extends Component {

  static propTypes = {
    getVenues: PropTypes.func,
    peopleFilter: PropTypes.func,
    query: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  checkboxClick(e) {
    this.props.peopleFilter();
  }
  
  submitQuery() {
    if(this.state.query !== this.props.query) {
      this.props.getVenues({coords: this.props.position.coords, query: this.state.query});
    }
  }

  render() {
    return (
      <section className="filters">
      <h4>Filters</h4>
      <input type="checkbox" onChange={e => this.checkboxClick(e) } />
      <label>People Here</label>
      <input 
        type="text" 
        onChange={e => this.setState({query: e.target.value})}
        value={this.state.query}
        placeholder="looking for..." 
      />
      <button onClick={e => this.submitQuery()}>Submit</button>
      </section>
    )
  }
}

export default connect(
  state => ({
    query: state.venues.query,
  }),
  dispatch => bindActionCreators({ getVenues, peopleFilter }, dispatch)
)(Filters)
