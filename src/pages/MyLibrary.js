import React from 'react';
import { connect } from 'react-redux';
import { MostPlayedSection, Loading } from '../SongsSectionStyles';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../SongsListStyles';
import { resetFavorites, saveCurrentSong } from '../redux/actions/changeSongsActions';
import MusicPlayer from '../components/MusicPlayer';

import { PageTitle } from '../SongsSectionStyles';
import Header from '../components/Header';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';
import { ImHeartBroken } from 'react-icons/im';
import { IoMdPlay } from 'react-icons/io';

class MyLibrary extends React.Component {
  constructor() {
    super();

    this.convertTime = this.convertTime.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
  }

  convertTime(durationInSeconds) {
    const MINUTES = Math.floor(durationInSeconds / 60);
    const SECONDS = Math.ceil(durationInSeconds - MINUTES * 60);
    // if SECONDS is lower than 9 we add a 0 to turn the number into the right format x:xx
    return `${MINUTES}:${SECONDS > 9 ? SECONDS : '0' + SECONDS}`;
  }

  removeFavorites(music) {
    const { updateFavorites, favorites } = this.props;
    const newFavorites = favorites.filter((allSongs) => allSongs.id !== music.id);
    updateFavorites(newFavorites);
  }

  render() {
    const { favorites, sendSongToRedux } = this.props;
    return (
      <>
        <Header redirect="/" />
        <PageTitle>Minhas favoritas</PageTitle>
        <MostPlayedSection>
          <MostPlayed>
            {favorites.length > 0 ? (
              favorites.map((music, index) => (
                <SongsDiv key={index}>
                  <h4>{music.title || music.name}</h4>
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
                    <ImHeartBroken className="react-fav-icon" size={20} onClick={() => this.removeFavorites(music)} />
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
  }
}

const mapStateToProps = (state) => ({
  favorites: state.musicReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
  updateFavorites: (payload) => dispatch(resetFavorites(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
