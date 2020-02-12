import React, { Fragment } from 'react';

function Header() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm">
          Logo
        </div>
        <div className="col-sm">
          Score
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          Round
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
