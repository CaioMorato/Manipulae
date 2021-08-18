import React from 'react';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';

class Homepage extends React.Component {
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

export default Homepage;
