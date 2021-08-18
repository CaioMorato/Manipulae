import React from 'react';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import { SectionTitle } from '../styles';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SectionTitle>Músicas mais ouvidas:</SectionTitle>
          <SongsSection />
        </main>
      </>
    );
  }
}

export default Homepage;
