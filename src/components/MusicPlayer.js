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
    // this.updateRange = this.updateRange.bind(this);

    this.audioPlayer = React.createRef();
    this.progressBar = React.createRef();

    this.state = {
      isPlaying: false,
      current_time: 0,
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
      setInterval(() => {
        this.setState((prevState) => ({
          current_time: prevState.current_time + 1,
        }));
      }, ONE_SECOND);
    } else {
      this.setState({
        isPlaying: false,
      });
      this.audioPlayer.current.pause();
    }
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
    const { isPlaying, current_time } = this.state;

    const previewDuration = this.audioPlayer.current?.duration;
    // const previewDefaultValue = this.audioPlayer.current?.duration;

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
            defaultValue={current_time}
            max={previewDuration}
            onChange={() => {
              this.slideBar();
            }}
            ref={this.progressBar}
            className="slider"
          />
          <p>Infelizmente o slider não acompanha a música sozinho, mas ao arrastar, a música acompanha o slider! &#128518;</p>
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
