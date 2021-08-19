import React from 'react';
import { connect } from 'react-redux';
import { Footer } from '../styles';

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
    const { current_song_cover, current_song } = this.props;
    const { songState } = this.state;
    return (
      <Footer>
        <img src={current_song_cover} alt="Capa da música que está tocando agora" />
        <div>
          <audio src={current_song} ref={this.audioPlayer} />
          <button type="button" onClick={this.changeSongState}>
            {songState}
          </button>
          <input type="range" />
        </div>
        <div>Adicionar aos favoritos</div>
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  current_song: state.musicReducer.current_song,
  current_song_cover: state.musicReducer.current_song_cover,
});

export default connect(mapStateToProps)(MusicPlayer);
