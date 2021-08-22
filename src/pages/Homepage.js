// vitals
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import MusicPlayerHook from '../components/MusicPlayerHook';
// redux
import { fetchAPI } from '../redux/actions/firstFetchActions';

const Homepage = ({ topChartFetch }) => {
  useEffect(() => {
    topChartFetch();
  });

  return (
    <>
      <Header />
      <SongsSection />
      <MusicPlayerHook />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  topChartFetch: () => dispatch(fetchAPI()),
});

Homepage.propTypes = {
  topChartFetch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Homepage);
