import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { SongsSection, SectionTitle } from '../styles';

class Homepage extends React.Component {
  constructor() {
    super();

    this.loadingGenerator = this.loadingGenerator.bind(this);
  }

  componentDidMount() {
    const { firstFetch } = this.props;
    firstFetch();
  }

  loadingGenerator() {
    const { loading } = this.props;
    if (loading) {
      return <span>Loading...</span>;
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <>
        <Header />
        <SectionTitle>
          <h2>Músicas mais ouvidas:</h2>
          <SongsSection>
            {this.loadingGenerator() ||
              tracks.data.map((item) => (
                <div>
                  <h4>{item.title}</h4>
                  <img src={item.album.cover} alt="" />
                </div>
              ))}
          </SongsSection>
        </SectionTitle>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
  tracks: state.listReducer.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
