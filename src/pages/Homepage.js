// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import HookHeader from '../components/HookHeader';
import SongsSection from '../components/SongsSection';
// redux
import { fetchAPI } from '../redux/actions/firstFetchActions';

class Homepage extends React.Component {
  componentDidMount() {
    const { topChartFetch } = this.props;
    topChartFetch();
  }

  render() {
    return (
      <>
        <HookHeader />
        <SongsSection />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  topChartFetch: () => dispatch(fetchAPI()),
});

Homepage.propTypes = {
  topChartFetch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Homepage);
