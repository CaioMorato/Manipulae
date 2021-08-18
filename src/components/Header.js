import React from 'react'
import {SearchHeader} from '../styles'

class Header extends React.Component{
  render() {
    return (
      <SearchHeader>
        <div>Imagem/Logo</div>
        <div>
          <input type="text" name="" />
        </div>
        <div>Configurações</div>
      </SearchHeader>
    )
  }
}

export default Header;