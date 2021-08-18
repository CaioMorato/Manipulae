import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { MostPlayed, SongsDiv } from '../styles';

class SongsSection extends React.Component {
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
    const {
      chart: { tracks },
    } = this.props;

    return (
      <MostPlayed>
        {this.loadingGenerator() ||
          tracks.data.map((music) => (
            <SongsDiv>
              <h4>{music.title}</h4>
              <img src={music.album.cover} alt={`Capa da música ${music.title}`} />
              <p>{music.artist.name}</p>
              <p>{(music.duration / 60).toFixed(2).replace('.', ':')}</p>
              <a href={music.link} target="_blank" rel="noreferrer">
                Confira no Deezer!
              </a>
              <br />
              <a href="https://google.com" target="_blank" rel="noreferrer">
                Adicione aos favoritos
              </a>
            </SongsDiv>
          ))}
      </MostPlayed>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
  chart: state.listReducer.chart,
});

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsSection);
