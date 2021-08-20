import React from 'react';
import { connect } from 'react-redux';
import { MostPlayedSection } from '../styles';
import { SectionTitle } from '../styles';
import SongsList from './SongsList';
class SongsSection extends React.Component {
  constructor() {
    super();
    this.loadingGenerator = this.loadingGenerator.bind(this);
  }

  loadingGenerator() {
    const { loading } = this.props;
    if (loading) {
      return <span>Loading...</span>;
    }
  }

  render() {
    return (
      <>
        <MostPlayedSection>
          <SectionTitle>Músicas mais ouvidas:</SectionTitle>
          {this.loadingGenerator() || <SongsList />}
        </MostPlayedSection>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
});

export default connect(mapStateToProps)(SongsSection);
