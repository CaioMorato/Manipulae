import React from 'react';
import { connect } from 'react-redux';
import { Footer, ProgressBarDiv } from '../styles';
import { ImPlay2, ImPause2 } from 'react-icons/im';
import { MdFavorite } from 'react-icons/md';

class MusicPlayer extends React.Component {
  constructor() {
    super();

    this.changeSongState = this.changeSongState.bind(this);
    this.slideBar = this.slideBar.bind(this);
    this.audioPlayer = React.createRef();
    this.progressBar = React.createRef();

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
    } else {
      this.setState({
        isPlaying: false,
      });
      this.audioPlayer.current.pause();
    }

    setInterval(() => {
      this.progressBar.current.value = this.audioPlayer.current.currentTime;
    }, ONE_SECOND);
  }

  slideBar() {
    this.audioPlayer.current.currentTime = this.progressBar.current.value;
  }

  render() {
    const { music_preview } = this.props;
    const { isPlaying } = this.state;

    const previewDuration = music_preview.preview ? this.audioPlayer.current.duration : 100;
    const previewDefaultValue = music_preview.preview ? this.audioPlayer.current.duration : 0;

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
        <MdFavorite className="react-fav-icon" size={40} />
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  music_preview: state.musicReducer.music_preview,
});

export default connect(mapStateToProps)(MusicPlayer);
