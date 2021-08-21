// vitals
import React from 'react';
import PropTypes from 'prop-types';
// styles
import { PaginationUL, PaginationLI } from '../PaginationStyles';

class Pagination extends React.Component {
  render() {
    const { limit, total, offset, setOffset } = this.props;
    const MAX_BUTTONS = 9;
    const MAX_SIDE = (MAX_BUTTONS - 1) / 2;
    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstButton = Math.max(current - MAX_SIDE, 1);
    return (
      <PaginationUL>
        {Array.from({ length: Math.min(MAX_BUTTONS, pages) })
          .map((_, index) => index + firstButton)
          .map((page) => (
            <PaginationLI>
              <button type="button" onClick={() => setOffset((page - 1) * limit)} className={page === current ? 'current-index' : null}>
                {page}
              </button>
            </PaginationLI>
          ))}
      </PaginationUL>
    );
  }
}

Pagination.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  offset: PropTypes.numer,
  setOffset: PropTypes.func,
}.isRequired;

export default Pagination;
