import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI, saveCurrentSong } from '../redux/actions';
import { MostPlayed, SongsDiv, MostPlayedSection } from '../styles';
import { SectionTitle } from '../styles';
import Slider from 'react-slick';

class SongsSection extends React.Component {
  constructor() {
    super();

    this.loadingGenerator = this.loadingGenerator.bind(this);
  }

  componentDidMount() {
    const { firstFetch } = this.props;
    firstFetch();
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
                  <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} width="200px" />
                  {/* <div>
                    <h4>{music.title}</h4>
                    <h4>{(music.duration / 60).toFixed(2).replace('.', ':')}</h4>
                  </div>
                  <p>{music.artist.name}</p>
                  <p></p>
                  <a href={music.link} target="_blank" rel="noreferrer">
                    Confira no Deezer!
                  </a>
                  <br />
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    Adicione aos favoritos
                  </a>
                  <br />
                  <button type="button" onClick={() => dispatchSong({ current_song: music.preview, current_song_cover: music.album.cover_small })}>
                    Ouvir
                  </button> */}
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
  firstFetch: () => dispatch(fetchAPI()),
  dispatchSong: (payload) => dispatch(saveCurrentSong(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsSection);
