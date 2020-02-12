import React, { Fragment } from 'react';
import Pagination from '../pagination'

function Header({ score = 0 }) {
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
      <Pagination />
    </Fragment>
  );
}

export default Header;
