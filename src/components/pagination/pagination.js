import React from 'react';

function Pagination({l}) {
  return (
    <div className="row pag">
      {l.map(i => {
        if(i.active) {
          return <div className="col-sm p-item active">{i.name}</div>;
        } else {
          return <div className="col-sm p-item">{i.name}</div>;
        }
      })}
    </div>
  );
}

export default Pagination;
