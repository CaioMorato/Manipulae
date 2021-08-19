import React from 'react';
import { connect } from 'react-redux';
import { Footer, ProgressBarDiv } from '../styles';

class MusicPlayer extends React.Component {
  constructor() {
    super();

    this.changeSongState = this.changeSongState.bind(this);
    this.audioPlayer = React.createRef();

    this.state = {
      songState: 'Play',
    };
  }

  changeSongState() {
    let { songState } = this.state;
    if (songState === 'Play') {
      this.setState({
        songState: 'Pause',
      });
      this.audioPlayer.current.play();
    } else {
      this.setState({
        songState: 'Play',
      });
      this.audioPlayer.current.pause();
    }
  }

  render() {
    const { music_preview } = this.props;
    const { songState } = this.state;
    return (
      <Footer>
        <img src={music_preview.album.cover_small} alt="Capa da música que está tocando agora" />
        <ProgressBarDiv>
          <audio src={music_preview.preview} ref={this.audioPlayer} />
          <button type="button" onClick={this.changeSongState}>
            {songState}
          </button>
          <div>00:00</div>
          <input type="range" />
          <div>02:47</div>
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
