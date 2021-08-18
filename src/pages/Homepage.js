import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { saveTopListened } from '../redux/actions';

class Homepage extends React.Component {
  constructor() {
    super();

    this.firstFetch = this.firstFetch.bind(this);
    this.loadingGenerator = this.loadingGenerator.bind(this);

    this.state = {
      tracks: {},
      loading: true,
    };
  }
  componentDidMount() {
    this.firstFetch();
  }

  async firstFetch() {
    await axios.get('/chart').then((data) => {
      this.setState({
        loading: false,
        tracks: Object.values(data)[0].tracks,
      });
    });
  }

  loadingGenerator() {
    const { loading } = this.state;
    if (loading) {
      return <span>Loading...</span>;
    }
  }
  render() {
    const { tracks } = this.state;
    return (
      <div>
        <Header />
        <main>
          <h2>Mais tocadas:</h2>
          {this.loadingGenerator() ||
            tracks.data.map((item) => (
              <div>
                <h4>{item.title}</h4>
                <img src={item.artist.picture} alt="" />
              </div>
            ))}
        </main>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Homepage);
