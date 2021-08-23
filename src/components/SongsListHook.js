// vitals
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Pagination from '../helpers/Pagination';
import { convertTime } from '../helpers';
// redux
import { fetchAPIWithQuery, makeFavorite, saveCurrentSong } from '../redux/actions/changeSongsActions';
// styles
import { MostPlayedSection } from '../SongsSectionStyles';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../SongsListStyles';
import { IoMdPlay } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';

const SongsListHook = (props) => {
  const [offSet, setOffSet] = useState(0);

  const saveFavorites = async (music) => {
    await props.sendFavoriteToRedux(music);

    saveStorage();
  };

  const updateOffSet = (valor) => {
    const { query, quantity, fetchSearch } = props;
    setOffSet(valor);
    fetchSearch({ query, quantity });
  };

  const saveStorage = () => {
    localStorage.setItem('favoriteSongs', JSON.stringify(props.favorites));
  };

  let whichListToRender = props.showChart ? props.chart.tracks : props.search_songs.data;

  return (
    <MostPlayedSection>
      <MostPlayed>
        {whichListToRender.data.map((music, index) => (
          <SongsDiv key={index}>
            <h4>{music.title}</h4>
            <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} />
            <p>{music.artist.name}</p>
            <h5>{convertTime(music.duration)}</h5>
            <ButtonsDiv>
              <a href={music.link} target="_blank" rel="noreferrer">
                <img src={deezerLogo} alt="Ícone do logo do deezer" />
              </a>
              <button type="button" onClick={() => props.sendSongToRedux(music)}>
                <IoMdPlay />
              </button>
              <MdFavoriteBorder className={'react-fav-icon'} size={20} onClick={() => saveFavorites(music)} />
            </ButtonsDiv>
          </SongsDiv>
        ))}
      </MostPlayed>
      {!props.showChart && <Pagination limit={25} total={props.headers ? props.headers['content-length'] : 1} offSet={offSet} setOffSet={updateOffSet} />}
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
  sendFavoriteToRedux: (payload) => dispatch(makeFavorite(payload)),
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
