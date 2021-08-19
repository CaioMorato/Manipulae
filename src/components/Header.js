import React from 'react';
import { connect } from 'react-redux';
import { SearchHeader, SearchInput, SearchInputContainer, HeaderDiv, AccountDiv } from '../styles';
// this picture below credits to Freepik from Flaticon.com
import profile from '../images/profile.png';
import { fetchAPIWithQuery } from '../redux/actions/changeSongsActions';

class Header extends React.Component {
  constructor() {
    super();

    this.fetchSongsByQuery = this.fetchSongsByQuery.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchQuery: '',
    };
  }
  handleChange({ target }) {
    const { value } = target;

    this.setState({
      searchQuery: value,
    });
  }

  fetchSongsByQuery() {
    const { fetchSearch } = this.props;
    const { searchQuery } = this.state;

    if (searchQuery !== '') {
      fetchSearch(searchQuery);
    }
  }

  render() {
    return (
      <SearchHeader>
        <HeaderDiv>
          <img src="https://manipulae.com.br/static/assets/images/Manipulae_colorido.png" height="55.66px" alt="Logo da minha futura empresa querida" />
        </HeaderDiv>
        <SearchInputContainer>
          <img src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png" alt="" />
          <SearchInput type="text" placeholder="Pesquise por nome de música, artista ou álbum" onChange={this.handleChange} />
          <button type="button" onClick={() => this.fetchSongsByQuery()}>
            Pesquisar
          </button>
        </SearchInputContainer>
        <AccountDiv>
          <img src={profile} alt="Foto de perfil" />
          <p>Minhas Favoritas</p>
        </AccountDiv>
      </SearchHeader>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: (payload) => dispatch(fetchAPIWithQuery(payload)),
});

export default connect(null, mapDispatchToProps)(Header);
