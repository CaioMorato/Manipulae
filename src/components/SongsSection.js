// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import SongsList from './SongsList';
// styles
import { MostPlayedSection, Loading, PageTitle } from '../styles';

class SongsSection extends React.Component {
  constructor() {
    super();

    this.loadingGenerator = this.renderLoading.bind(this);
  }

  renderLoading() {
    const { loading } = this.props;
    if (loading) {
      return <Loading>Carregando as melhores músicas pra você</Loading>;
    }
  }

  render() {
    const { showChart, query } = this.props;
    return (
      <>
        <PageTitle>{showChart ? 'Top 10 músicas mais ouvidas' : `Buscas relacionadas a '${query}'`}</PageTitle>
        <MostPlayedSection>{this.renderLoading() || <SongsList />}</MostPlayedSection>
      </>
    );
  }
}

const mapStateToProps = ({ listReducer, musicReducer }) => ({
  loading: listReducer.loading,
  showChart: musicReducer.showChart,
  query: musicReducer.query,
});

SongsSection.propTypes = {
  loading: PropTypes.bool,
  showChart: PropTypes.bool,
  query: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(SongsSection);
