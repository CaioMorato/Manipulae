// vitals
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { PageTitle } from '../SongsSectionStyles';
import { NotFoundDIV } from '../NotFoundStyles';

const NotFound = () => {
  return (
    <NotFoundDIV>
      <PageTitle>Não tem nada aqui &#9785;</PageTitle>
      <Link to="/">Voltar ao início</Link>
    </NotFoundDIV>
  );
};

export default NotFound;
