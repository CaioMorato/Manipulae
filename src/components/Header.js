import React from 'react';
import { SearchHeader, SearchInput, SearchInputContainer, HeaderDiv, AccountDiv } from '../styles';
// this picture below credits to Freepik from Flaticon.com
import profile from '../images/profile.png';

class Header extends React.Component {
  render() {
    return (
      <SearchHeader>
        <HeaderDiv>
          <img src="https://manipulae.com.br/static/assets/images/Manipulae_colorido.png" height="55.66px" alt="" />
        </HeaderDiv>
        <SearchInputContainer>
          <SearchInput type="text" placeholder="Pesquise por música, cantor ou álbum" />
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
