import React from 'react';
import { SearchHeader, SearchInput, SearchInputContainer, HeaderDiv, AccountDiv } from '../styles';
// this picture below credits to Freepik from Flaticon.com
import profile from '../images/profile.png';

class Header extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <SearchHeader>
        <HeaderDiv>
          <img src="https://manipulae.com.br/static/assets/images/Manipulae_colorido.png" height="55.66px" alt="Logo da minha futura empresa querida" />
        </HeaderDiv>
        <SearchInputContainer>
          <img src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png" alt="" />
          <SearchInput type="text" placeholder="Pesquise por nome de música, artista ou álbum" onChange={handleChange} />
        </SearchInputContainer>
        <AccountDiv>
          <img src={profile} alt="Foto de perfil" />
          <p>Minhas Favoritas</p>
        </AccountDiv>
      </SearchHeader>
    );
  }
}

export default Header;
