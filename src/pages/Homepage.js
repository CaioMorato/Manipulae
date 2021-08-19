import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SongsSection from '../components/SongsSection';
import MusicPlayer from '../components/MusicPlayer';
import { fetchAPI } from '../redux/actions';

class Homepage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

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

  render() {
    return (
      <>
        <Header handleChange={this.handleChange} />
        <main>
          <SongsSection />
          <MusicPlayer />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Homepage);
