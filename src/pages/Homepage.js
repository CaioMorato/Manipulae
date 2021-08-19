import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import MusicPlayer from '../components/MusicPlayer';
import { fetchAPI } from '../redux/actions/firstFetchActions';
import { fetchAPIWithQuery } from '../redux/actions/changeSongsActions';

class Homepage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchSongsByQuery = this.fetchSongsByQuery.bind(this);

    this.state = {
      searchQuery: '',
    };
  }

  componentDidMount() {
    const { firstFetch } = this.props;
    firstFetch();
  }

  handleChange({ target }) {
    const { value } = target;

    this.setState({
      searchQuery: value,
    });
  }

  fetchSongsByQuery() {
    const { searchQuery, fetchSearch } = this.props;

    if (searchQuery !== '') {
      fetchSearch(searchQuery);
    }
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Header handleChange={this.handleChange} fetchSongsByQuery={this.fetchSongsByQuery} />
        <main>
          <SongsSection searchQuery={searchQuery} />
          <MusicPlayer />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
  fetchSearch: (payload) => dispatch(fetchAPIWithQuery(payload)),
});

export default connect(null, mapDispatchToProps)(Homepage);
