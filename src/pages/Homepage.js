import React from 'react';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import MusicPlayer from '../components/MusicPlayer';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SongsSection />
          <MusicPlayer />
        </main>
      </>
    );
  }
}

export default Homepage;
