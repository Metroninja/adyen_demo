import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// This is in essence a completely blank file used for copy pasta for each new
//component.  If this is still at the top of any file that's in use #whoops


class ChangeMeDoNotForget extends Component {

  static propTypes = {
  };

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <section>
      </section>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({ }, dispatch)
)(ChangeMeDoNotForget)
