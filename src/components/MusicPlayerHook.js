// vitals
import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// redux
import { makeFavorite } from '../redux/actions/changeSongsActions';
// styles
import { MdFavorite } from 'react-icons/md';
import { ImPlay2, ImPause2 } from 'react-icons/im';
import { Footer, ProgressBarDiv } from '../MusicPlayerStyles';

const MusicPlayerHook = ({ sendFavoriteToRedux, music_preview }) => {
  // states
  const [isPlaying, playSong] = useState(false);
  const [current_time, changeCurrent_time] = useState(0);
  const [duration, setDuration] = useState(0);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changeSongState = () => {
    if (!isPlaying) {
      playSong(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      playSong(false);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrent_time(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrent_time(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const saveFavorites = (music) => {
    sendFavoriteToRedux(music);
  };

  return (
    <Footer>
      <div>
        <audio src={music_preview.preview} preload="metadata" ref={audioPlayer} />
        <img src={music_preview.album.cover_small} alt="Capa da música que está tocando agora" />
      </div>
      <div>{isPlaying ? <ImPause2 size={30} onClick={changeSongState} color="black" /> : <ImPlay2 size={30} onClick={changeSongState} color="black" />}</div>
      <ProgressBarDiv>
        {current_time}
        <input
          type="range"
          defaultValue={0}
          onChange={() => {
            changeRange();
          }}
          ref={progressBar}
          className="slider"
        />
        <div>{duration}</div>
      </ProgressBarDiv>
      <MdFavorite className="react-fav-icon" onClick={() => saveFavorites(music_preview)} size={40} />
    </Footer>
  );
};

const mapStateToProps = ({ musicReducer }) => ({
  music_preview: musicReducer.music_preview,
});

const mapDispatchToProps = (dispatch) => ({
  sendFavoriteToRedux: (payload) => dispatch(makeFavorite(payload)),
});

MusicPlayerHook.propTypes = {
  music_preview: PropTypes.objectOf(Object),
  sendFavoriteToRedux: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerHook);
