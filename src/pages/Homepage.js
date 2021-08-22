// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import HeaderHook from '../components/HeaderHook';
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
        <HeaderHook />
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
