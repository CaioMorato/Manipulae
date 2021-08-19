import React from 'react';
import { connect } from 'react-redux';
import { saveCurrentSong } from '../redux/actions/changeSongsActions';
import { MostPlayed, SongsDiv, MostPlayedSection, ButtonsDiv } from '../styles';
import { SectionTitle } from '../styles';
import Slider from 'react-slick';
import { IoMdPlay } from 'react-icons/io';
// the icon below credits to Freepik from flaticons.com
import deezerLogo from '../images/deezer-logo.png';
// the icon below credits to Pixel Perfect from flaticons.com
import star from '../images/star.png';

class SongsSection extends React.Component {
  constructor() {
    super();

    this.loadingGenerator = this.loadingGenerator.bind(this);
  }

  loadingGenerator() {
    const { loading } = this.props;
    if (loading) {
      return <span>Loading...</span>;
    }
  }


  render() {
    const {
      chart: { tracks },
      sendSongToRedux,
    } = this.props;

    const carouselSettings = {
      arrows: false,
      className: 'center',
      infinite: true,
      centerMode: true,
      centerPadding: '65px',
      slidesToShow: 4,
      swipeToSlide: true,
    };
    return (
      <MostPlayedSection>
        <SectionTitle>Músicas mais ouvidas:</SectionTitle>
        <MostPlayed>
          {this.loadingGenerator() || (
            <Slider {...carouselSettings} className="carousel-slider">
              {tracks.data.map((music) => (
                <SongsDiv>
                  <h4>{music.title}</h4>
                  <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} width="190px" />
                  <div>
                    <p>{music.artist.name}</p>
                    <h5>{(music.duration / 60).toFixed(2).replace('.', ':')}</h5>
                  </div>
                  <ButtonsDiv>
                    <a href={music.link} target="_blank" rel="noreferrer">
                      <img src={deezerLogo} alt="Ícone do logo do deezer" />
                    </a>
                    <button type="button" onClick={() => sendSongToRedux({ current_song: music.preview, current_song_cover: music.album.cover_small })}>
                      <IoMdPlay />
                    </button>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                      <img src={star} alt="Ícone representando favoritos" />
                    </a>
                  </ButtonsDiv>
                </SongsDiv>
              ))}
            </Slider>
          )}
        </MostPlayed>
      </MostPlayedSection>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
  chart: state.listReducer.chart,
});

const mapDispatchToProps = (dispatch) => ({
  sendSongToRedux: (payload) => dispatch(saveCurrentSong(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsSection);
