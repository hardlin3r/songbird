import React from 'react';

function Pagination() {
  return (
    <div className="row pag">
      <div className="col-sm p-item">
        Разминка
      </div>
      <div className="col-sm p-item">
        Воробьиные
      </div>
      <div className="col-sm p-item active">
        2
      </div>
    </div>
  );
}

export default Pagination;
