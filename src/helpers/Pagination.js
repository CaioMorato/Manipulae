// vitals
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// redux
import { pageChange } from '../redux/actions/changeSongsActions';
// styles
import { PaginationUL, PaginationLI } from '../PaginationStyles';

const Pagination = (limit, total, offset, setOffSet, changePage) => {
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
            <button
              type="button"
              onClick={async ({ target }) => {
                await changePage(target.innerHTML);
                setOffSet((page - 1) * limit);
              }}
              className={page === current ? 'current-index' : null}
            >
              {page}
            </button>
          </PaginationLI>
        ))}
    </PaginationUL>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changePage: (payload) => dispatch(pageChange(payload)),
});

Pagination.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  offset: PropTypes.numer,
  setOffset: PropTypes.func,
  changePage: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Pagination);
