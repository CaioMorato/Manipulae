import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { SongsSection, SectionTitle, SongsDiv } from '../styles';

class Homepage extends React.Component {
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
    return (
      <>
        <Header />
        <section>
          <SectionTitle>Músicas mais ouvidas:</SectionTitle>
          {this.loadingGenerator() || (
            <SongsSection>
              {tracks.data.map((music) => (
                <SongsDiv>
                  <h4>{music.title}</h4>
                  <img src={music.album.cover} alt={`Capa da música ${music.title}`} />
                  <p>{music.artist.name}</p>
                  <p>{(music.duration / 60).toFixed(2).replace('.', ':')}</p>
                  <a href={music.link} target="_blank" rel="noreferrer">
                    Confira no Deezer!
                  </a>
                </SongsDiv>
              ))}
            </SongsSection>
          )}
          {/* <SongsSection></SongsSection> */}
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
