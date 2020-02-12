import React from 'react';

function Options({options, clickCb, attempts, correct, success}) {
  return (
    <ul className="list-group row">
      {options.map(o => {
        let id = parseInt(o.id);
        if(id === correct && success) {
          return (
            <li
              className="list-group-item list-group-item-action list-group-item-success"
              key={o.id}
              data-id={o.id}
              onClick={clickCb}>
              {o.name}
            </li>
          );
        } else if(attempts.has(id)) {
          return (
            <li
              className="list-group-item list-group-item-action list-group-item-danger"
              key={o.id}
              data-id={o.id}
              onClick={clickCb}>
              {o.name}
            </li>
          );
        } else {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={o.id}
              data-id={o.id}
              onClick={clickCb}>
              {o.name}
            </li>
          );
        }
      })}
    </ul>
  );
}

export default Options;
