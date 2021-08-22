// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Pagination from '../helpers/Pagination';
// redux
import { fetchAPIWithQuery, makeFavorite, saveCurrentSong } from '../redux/actions/changeSongsActions';
// styles
import { MostPlayedSection } from '../SongsSectionStyles';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../SongsListStyles';
import { IoMdPlay } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';

class SongsList extends React.Component {
  constructor() {
    super();

    this.setOffset = this.setOffset.bind(this);
    this.saveFavorites = this.saveFavorites.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.saveStorage = this.saveStorage.bind(this);

    this.state = {
      offSet: 0,
    };
  }

  setOffset(value) {
    const { fetchSearch, query, quantity } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      offSet: value,
    }));
    fetchSearch({ query, quantity });
  }

  async saveFavorites(music) {
    const { sendFavoriteToRedux } = this.props;
    await sendFavoriteToRedux(music);

    this.saveStorage();
  }

  saveStorage() {
    const { favorites } = this.props;
    localStorage.setItem('favoriteSongs', JSON.stringify(favorites));
  }

  convertTime(durationInSeconds) {
    const MINUTES = Math.floor(durationInSeconds / 60);
    const SECONDS = Math.ceil(durationInSeconds - MINUTES * 60);
    // if SECONDS is lower than 9 we add a 0 to turn the number into the right format x:xx
    return `${MINUTES}:${SECONDS > 9 ? SECONDS : '0' + SECONDS}`;
  }

  render() {
    const { chart, search_songs, sendSongToRedux, showChart, headers } = this.props;
    const { offSet } = this.state;
    const LIMITE_PAG = 25;
    // If we want to render the top chart showCart will be true so we will read chart.tracks array.
    // If showCart is false we will get search_songs.data array
    let whichListToRender = showChart ? chart.tracks : search_songs.data;
    return (
      <MostPlayedSection>
        <MostPlayed>
          {whichListToRender.data.map((music, index) => (
            <SongsDiv key={index}>
              <h4>{music.title}</h4>
              <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} />
              <p>{music.artist.name}</p>
              <h5>{this.convertTime(music.duration)}</h5>
              <ButtonsDiv>
                <a href={music.link} target="_blank" rel="noreferrer">
                  <img src={deezerLogo} alt="Ícone do logo do deezer" />
                </a>
                <button type="button" onClick={() => sendSongToRedux(music)}>
                  <IoMdPlay />
                </button>
                <MdFavoriteBorder className={'react-fav-icon'} size={20} onClick={() => this.saveFavorites(music)} />
              </ButtonsDiv>
            </SongsDiv>
          ))}
        </MostPlayed>
        <div>{!showChart && <Pagination limit={LIMITE_PAG} total={headers ? headers['content-length'] : 1} offset={offSet} setOffset={this.setOffset} />}</div>
      </MostPlayedSection>
    );
  }
}

const mapStateToProps = ({ topChartReducer, musicReducer }) => ({
  chart: topChartReducer.chart,
  showChart: musicReducer.showChart,
  search_songs: musicReducer.search_songs,
  quantity: musicReducer.quantity,
  query: musicReducer.query,
  headers: musicReducer.headers,
  favorites: musicReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
  fetchSearch: (payload) => dispatch(fetchAPIWithQuery(payload)),
  sendFavoriteToRedux: (payload) => {
    dispatch(makeFavorite(payload));
  },
});

SongsList.propTypes = {
  chart: PropTypes.objectOf(Object),
  showChart: PropTypes.bool,
  search_songs: PropTypes.objectOf(Object),
  quantity: PropTypes.number,
  query: PropTypes.string,
  headers: PropTypes.objectOf(Object),
  favorites: PropTypes.arrayOf(Object),
  sendSongToRedux: PropTypes.func,
  fetchSearch: PropTypes.func,
  sendFavoriteToRedux: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
