import React from 'react';
import { connect } from 'react-redux';
import { MostPlayedSection } from '../SongsSectionStyles';
import { SongsDiv, ButtonsDiv, MostPlayed } from '../SongsListStyles';
import { makeFavorite, saveCurrentSong } from '../redux/actions/changeSongsActions';
import MusicPlayer from '../components/MusicPlayer';

import { PageTitle } from '../SongsSectionStyles';
import Header from '../components/Header';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';
import { MdFavoriteBorder } from 'react-icons/md';
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
    const { favorites, sendFavoriteToRedux } = this.props;
    const newFavorites = favorites.filter((allSongs) => allSongs.id !== music.id);
    sendFavoriteToRedux(newFavorites);
  }

  render() {
    const { favorites, sendSongToRedux } = this.props;
    return (
      <>
        <Header redirect='/' />
        <PageTitle>Minhas favoritas</PageTitle>
        <MostPlayedSection>
          <MostPlayed>
            {favorites.map((music) => (
              <SongsDiv key={music.id}>
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
                  <MdFavoriteBorder className="react-fav-icon" size={20} onClick={() => this.removeFavorites(music)} />
                </ButtonsDiv>
              </SongsDiv>
            ))}
          </MostPlayed>
          <MusicPlayer />
        </MostPlayedSection>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.musicReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
  sendFavoriteToRedux: (payload) => dispatch(makeFavorite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
