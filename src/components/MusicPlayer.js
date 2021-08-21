import React from 'react';
import { connect } from 'react-redux';
import { Footer, ProgressBarDiv } from '../styles';
import { ImPlay2, ImPause2 } from 'react-icons/im';
import { MdFavorite } from 'react-icons/md';
import { makeFavorite } from '../redux/actions/changeSongsActions';

class MusicPlayer extends React.Component {
  constructor() {
    super();

    this.changeSongState = this.changeSongState.bind(this);
    this.slideBar = this.slideBar.bind(this);
    this.saveFavorites = this.saveFavorites.bind(this);
    this.updateRange = this.updateRange.bind(this);

    this.audioPlayer = React.createRef();
    this.progressBar = React.createRef();
    this.animationRef = React.createRef();

    this.state = {
      isPlaying: false,
    };
  }

  changeSongState() {
    let { isPlaying } = this.state;
    const ONE_SECOND = 1000;
    if (!isPlaying) {
      this.setState({
        isPlaying: true,
      });
      this.audioPlayer.current.play();
      this.animationRef.current = requestAnimationFrame(this.updateRange);
    } else {
      this.setState({
        isPlaying: false,
      });
      this.audioPlayer.current.pause();
      cancelAnimationFrame(this.animationRef);
    }
  }
  updateRange() {
    this.progressBar.current.value = this.audioPlayer.current?.currentTime;
    this.animationRef.current = requestAnimationFrame(this.updateRange);
  }

  slideBar() {
    this.audioPlayer.current.currentTime = this.progressBar.current.value;
  }

  saveFavorites(music) {
    const { sendFavoriteToRedux } = this.props;
    sendFavoriteToRedux(music);
  }

  render() {
    const { music_preview } = this.props;
    const { isPlaying } = this.state;

    const previewDuration = music_preview.preview ? this.audioPlayer.current?.duration : 100;
    const previewDefaultValue = music_preview.preview ? this.audioPlayer.current?.duration : 0;

    return (
      <Footer>
        <div>
          <audio src={music_preview.preview} ref={this.audioPlayer} />
          <img src={music_preview.album.cover_small} alt="Capa da música que está tocando agora" />
        </div>
        <div>{isPlaying ? <ImPause2 size={30} onClick={this.changeSongState} color="black" /> : <ImPlay2 size={30} onClick={this.changeSongState} color="black" />}</div>
        <ProgressBarDiv>
          <input
            type="range"
            defaultValue={previewDefaultValue}
            max={previewDuration}
            onChange={() => {
              this.slideBar();
            }}
            ref={this.progressBar}
            className="slider"
          />
        </ProgressBarDiv>
        <MdFavorite className="react-fav-icon" onClick={() => this.saveFavorites(music_preview)} size={40} />
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  music_preview: state.musicReducer.music_preview,
});

const mapDispatchToProps = (dispatch) => ({
  sendFavoriteToRedux: (payload) => dispatch(makeFavorite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
