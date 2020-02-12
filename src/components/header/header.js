import React, { Fragment } from 'react';
import Pagination from '../pagination'

function Header({ round, score, l }) {
  return (
    <Fragment>
      <header className="row align-items-center">
        <div className="col-sm text-left">
          <h1>
            Songbird
          </h1>
        </div>
        <div className="col-sm text-right">
          Score: {score}
        </div>
      </header>
      <Pagination l={l} />
    </Fragment>
  );
}

export default Header;
