import React from 'react';
import { connect } from 'react-redux';
import { Footer } from '../styles';

class MusicPlayer extends React.Component {
  render() {
    const { current_song_cover } = this.props;
    return (
      <Footer>
        <img src={current_song_cover} alt="Capa da música que está tocando agora" />
        <div>Tracker</div>
        <div>Adicionar aos favoritos</div>
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  current_song_cover: state.musicReducer.current_song_cover,
});

export default connect(mapStateToProps)(MusicPlayer);
