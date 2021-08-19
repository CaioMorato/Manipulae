import React from 'react';
import { connect } from 'react-redux';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../styles';
import { saveCurrentSong } from '../redux/actions/changeSongsActions';
import { IoMdPlay } from 'react-icons/io';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';
// the icon below credits to Pixel Perfect from flaticons.com
import star from '../images/star.png';
import { fetchAPIWithQuery } from '../redux/actions/changeSongsActions';
import Pagination from '../helpers/Pagination';

class SongsList extends React.Component {
  constructor() {
    super();

    this.setOffset = this.setOffset.bind(this);

    this.state = {
      offSet: 0,
    };
  }

  setOffset(value) {
    const { fetchSearch, query, quantity } = this.props;
    this.setState({
      offSet: value,
    });
    fetchSearch({ query, quantity });
  }

  render() {
    const { chart, search_songs, sendSongToRedux, showChart, headers } = this.props;
    const { offSet } = this.state;
    const LIMITE_PAG = 25;
    const whereToLookAt = showChart ? chart.tracks : search_songs.data;
    console.log(headers ? headers['content-length'] : null);
    return (
      <>
        <MostPlayed>
          {whereToLookAt.data.map((music) => (
            <SongsDiv key={music.id}>
              <h4>{music.title || music.name}</h4>
              <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} width="190px" />
              <div>
                <p>{music.artist.name}</p>
                <h5>{(music.duration / 60).toFixed(2).replace('.', ':')}</h5>
              </div>
              <ButtonsDiv>
                <a href={music.link} target="_blank" rel="noreferrer">
                  <img src={deezerLogo} alt="Ícone do logo do deezer" />
                </a>
                <button type="button" onClick={() => sendSongToRedux({ current_song: music.preview, current_song_cover: music.album.cover_small })}>
                  <IoMdPlay />
                </button>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <img src={star} alt="Ícone representando favoritos" />
                </a>
              </ButtonsDiv>
            </SongsDiv>
          ))}
        </MostPlayed>
        {!showChart && <Pagination limit={LIMITE_PAG} total={headers ? headers['content-length'] : 1} offset={offSet} setOffset={this.setOffset} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  chart: state.listReducer.chart,
  showChart: state.musicReducer.showChart,
  search_songs: state.musicReducer.search_songs,
  quantity: state.musicReducer.quantity,
  query: state.musicReducer.query,
  headers: state.musicReducer.headers,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
  fetchSearch: (payload) => dispatch(fetchAPIWithQuery(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
