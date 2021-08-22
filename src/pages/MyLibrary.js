// vitals
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
import { convertTime } from '../helpers';
// redux
import { resetFavorites, saveCurrentSong } from '../redux/actions/changeSongsActions';
// styles
import { IoMdPlay } from 'react-icons/io';
import { ImHeartBroken } from 'react-icons/im';
import { PageTitle } from '../SongsSectionStyles';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../SongsListStyles';
import { MostPlayedSection, Loading } from '../SongsSectionStyles';

const MyLibrary = ({ favorites, sendSongToRedux, updateFavorites }) => {
  useEffect(() => {
    const getLocalStorage = async () => {
      if (localStorage.getItem('favoriteSongs')) {
        await updateFavorites(JSON.parse(localStorage.getItem('favoriteSongs')));
      }
    };
    getLocalStorage();
  }, [updateFavorites]);

  const removeFavorites = async (music) => {
    const newFavorites = favorites.filter((allSongs) => allSongs.id !== music.id);
    await updateFavorites(newFavorites);
    console.log(newFavorites);
    await updateLocalStorage(newFavorites);
  };

  const updateLocalStorage = async (newFavorites) => {
    await localStorage.setItem('favoriteSongs', JSON.stringify(newFavorites));
  };

  return (
    <>
      <Header redirect="/" />
      <PageTitle>Minhas favoritas</PageTitle>
      <MostPlayedSection>
        <MostPlayed>
          {favorites.length > 0 ? (
            favorites.map((music, index) => (
              <SongsDiv key={index}>
                <h4>{music.title}</h4>
                <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} />
                <p>{music.artist.name}</p>
                <h5>{convertTime(music.duration)}</h5>
                <ButtonsDiv>
                  <a href={music.link} target="_blank" rel="noreferrer">
                    <img src={deezerLogo} alt="Ícone do logo do deezer" />
                  </a>
                  <button type="button" onClick={() => sendSongToRedux(music)}>
                    <IoMdPlay />
                  </button>
                  <ImHeartBroken className="react-fav-icon" size={20} onClick={() => removeFavorites(music)} />
                </ButtonsDiv>
              </SongsDiv>
            ))
          ) : (
            <Loading>Sem Favoritos encontrados</Loading>
          )}
        </MostPlayed>
      </MostPlayedSection>
      <MusicPlayer />
    </>
  );
};

const mapStateToProps = ({ musicReducer }) => ({
  favorites: musicReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
  updateFavorites: (payload) => dispatch(resetFavorites(payload)),
});

MyLibrary.propTypes = {
  favorites: PropTypes.arrayOf(Object),
  sendSongToRedux: PropTypes.func,
  updateFavorites: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
