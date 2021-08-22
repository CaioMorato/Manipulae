// vitals
import React, { useState } from 'react';
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

const SongsListHook = ({ sendFavoriteToRedux, favorites, chart, search_songs, sendSongToRedux, showChart, headers }) => {
  const [offSet, setOffset] = useState(0);

  const saveFavorites = async (music) => {
    await sendFavoriteToRedux(music);

    saveStorage();
  };

  const saveStorage = () => {
    localStorage.setItem('favoriteSongs', JSON.stringify(favorites));
  };

  const timeConverter = (durationInSeconds) => {
    const MINUTES = Math.floor(durationInSeconds / 60);
    const SECONDS = Math.ceil(durationInSeconds - MINUTES * 60);
    // if SECONDS is lower than 9 we add a 0 to turn the number into the right format x:xx
    return `${MINUTES}:${SECONDS > 9 ? SECONDS : '0' + SECONDS}`;
  };

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
      <div>{!showChart && <Pagination limit={25} total={headers ? headers['content-length'] : 1} offset={offSet} setOffset={this.setOffset} />}</div>
    </MostPlayedSection>
  );
};

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

SongsListHook.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SongsListHook);
