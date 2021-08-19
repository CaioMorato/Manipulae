import React from 'react';

class Pagination extends React.Component {
  render() {
    const { limit, total, offset, setOffset } = this.props;
    const MAX_BUTTONS = 9;
    const MAX_SIDE = (MAX_BUTTONS - 1) / 2;
    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstButton = Math.max(current - MAX_SIDE, 1);
    return (
      <div>
        <ul>
          {Array.from({ length: Math.min(MAX_BUTTONS, pages) })
            .map((_, index) => index + firstButton)
            .map((page) => (
              <li>
                <button type="button" onClick={() => setOffset(((page - 1) * limit))}>
                  {page}
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Pagination;
