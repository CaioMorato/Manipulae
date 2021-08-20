import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import MusicPlayer from '../components/MusicPlayer';
import { fetchAPI } from '../redux/actions/firstFetchActions';

class Homepage extends React.Component {
  componentDidMount() {
    const { firstFetch } = this.props;
    firstFetch();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <SongsSection />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Homepage);
