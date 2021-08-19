import React from 'react';
import { connect } from 'react-redux';
import { MostPlayedSection } from '../styles';
import CarouselChartSongs from './CarouselChartSongs';

class SongsSection extends React.Component {
  render() {
    const { showChart } = this.props;
    return <MostPlayedSection>{showChart ? <CarouselChartSongs /> : <div>Você procurou músicas</div>}</MostPlayedSection>;
  }
}

const mapStateToProps = (state) => ({
  showChart: state.musicReducer.showChart,
});

export default connect(mapStateToProps)(SongsSection);
