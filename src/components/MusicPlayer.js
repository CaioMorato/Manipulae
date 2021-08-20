import React from 'react';
import { connect } from 'react-redux';
import { Footer, ProgressBarDiv } from '../styles';

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
        <img src={music_preview.album.cover_small} alt="Capa da música que está tocando agora" />
        <ProgressBarDiv>
          <audio src={music_preview.preview} ref={this.audioPlayer} />
          <button type="button" onClick={this.changeSongState}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            defaultValue={previewDefaultValue}
            max={previewDuration}
            onChange={() => {
              this.slideBar();
            }}
            ref={this.progressBar}
          />
        </ProgressBarDiv>
        <div>Adicionar aos favoritos</div>
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  music_preview: state.musicReducer.music_preview,
});

export default connect(mapStateToProps)(MusicPlayer);
