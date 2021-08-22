// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
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

class MyLibrary extends React.Component {
  constructor() {
    super();

    this.convertTime = this.convertTime.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  componentDidMount() {
    const { updateFavorites } = this.props;

    if (localStorage.getItem('favoriteSongs')) {
      updateFavorites(JSON.parse(localStorage.getItem('favoriteSongs')));
    }
  }

  convertTime(durationInSeconds) {
    const MINUTES = Math.floor(durationInSeconds / 60);
    const SECONDS = Math.ceil(durationInSeconds - MINUTES * 60);
    // if SECONDS is lower than 9 we add a 0 to turn the number into the right format x:xx
    return `${MINUTES}:${SECONDS > 9 ? SECONDS : '0' + SECONDS}`;
  }

  async removeFavorites(music) {
    const { updateFavorites, favorites } = this.props;
    const newFavorites = favorites.filter((allSongs) => allSongs.id !== music.id);
    await updateFavorites(newFavorites);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    const { favorites } = this.props;
    localStorage.setItem('favoriteSongs', JSON.stringify(favorites));
  }

  render() {
    const { sendSongToRedux, favorites } = this.props;

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
