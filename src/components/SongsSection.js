import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { MostPlayed, SongsDiv } from '../styles';
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
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
    };
    return (
      <>
        <SectionTitle>Músicas mais ouvidas:</SectionTitle>
        <MostPlayed>
          {this.loadingGenerator() || (
            <Slider {...carouselSettings}>
              {tracks.data.map((music) => (
                <SongsDiv>
                  <img src={music.album.cover_medium} alt={`Capa da música ${music.title}`} />
                  <h4>{music.title}</h4>
                  <p>{music.artist.name}</p>
                  <p>{(music.duration / 60).toFixed(2).replace('.', ':')}</p>
                  <a href={music.link} target="_blank" rel="noreferrer">
                    Confira no Deezer!
                  </a>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    Adicione aos favoritos
                  </a>
                </SongsDiv>
              ))}
            </Slider>
          )}
        </MostPlayed>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
  chart: state.listReducer.chart,
});

const mapDispatchToProps = (dispatch) => ({
  firstFetch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsSection);

// {
//   tracks.data.map((music) => (
//     <Slider {...carouselSettings}>
//       <SongsDiv>
//         <img src={music.album.cover} alt={`Capa da música ${music.title}`} />
//         <h4>{music.title}</h4>
//         <p>{music.artist.name}</p>
//         <p>{(music.duration / 60).toFixed(2).replace('.', ':')}</p>
//         <a href={music.link} target="_blank" rel="noreferrer">
//           Confira no Deezer!
//         </a>
//         <a href="https://google.com" target="_blank" rel="noreferrer">
//           Adicione aos favoritos
//         </a>
//       </SongsDiv>
//     </Slider>
//   ));
// }
