// vitals
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// redux
import { fetchAPIWithQuery } from '../redux/actions/changeSongsActions';
// styles
import { SearchHeader, SearchInput, SearchInputContainer, HeaderImgDiv, AccountDiv } from '../HeaderStyles';
// this picture below credits to Freepik from Flaticon.com
import avatar from '../images/avatar.png';

class Header extends React.Component {
  constructor() {
    super();

    this.fetchSongsByQuery = this.fetchSongsByQuery.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      query: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  fetchSongsByQuery() {
    const { fetchSearch } = this.props;
    const { query } = this.state;

    if (query) {
      fetchSearch({ query, quantity: '0' });
    }
  }

  render() {
    const { redirect } = this.props;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <SearchHeader>
        <HeaderImgDiv>
          <a href="https://manipulae.com.br/" target="_blank" rel="noreferrer">
            <img src="https://manipulae.com.br/static/assets/images/Manipulae_colorido.png" height="55.66px" alt="Logo da empresa" />
          </a>
        </HeaderImgDiv>
        <SearchInputContainer>
          <img src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png" alt="Ícone de lupa" />
          <SearchInput type="text" placeholder="Pesquise por nome de música, artista ou álbum" onChange={this.handleChange} />
          <button
            type="button"
            onClick={() => {
              this.fetchSongsByQuery();
              if (redirect) this.setState({ shouldRedirect: true });
            }}
          >
            Pesquisar
          </button>
        </SearchInputContainer>
        <Link to={redirect ? redirect : 'MyLibrary'}>
          <AccountDiv>
            <img src={avatar} alt="Foto de perfil" />
            <p>{redirect ? 'Voltar ao TOP Charts' : 'Minha biblioteca'}</p>
          </AccountDiv>
        </Link>
      </SearchHeader>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: (payload) => dispatch(fetchAPIWithQuery(payload)),
});

Header.propTypes = {
  fetchSearch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Header);
