import React from 'react';
import Header from '../components/Header';
import axios from 'axios';

class Homepage extends React.Component {
  constructor() {
    super();

    this.firstFetch = this.firstFetch.bind(this);

    this.state = {
      tracks: [],
    };
  }
  componentDidMount() {
    this.firstFetch();
  }

  async firstFetch() {
    await axios.get('/chart').then((data) => {
      this.setState({
        tracks: Object.values(data)[0],
      });
    });
  }
  render() {
    const { tracks: {tracks} } = this.state;
    return (
      <div>
        <Header />
        <main>
          {tracks && tracks.map((music) => (
            <div>music</div>
          ))}
        </main>
      </div>
    );
  }
}

export default Homepage;
