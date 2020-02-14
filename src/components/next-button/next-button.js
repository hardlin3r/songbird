import React from 'react';

function NextButton({ success, clickNext }) {
  if(success) {
    return (
      <button type="button" className="btn btn-success btn-primary btn-lg btn-block" onClick={clickNext}>
        Next level
      </button>
    )
  } else {
    return (
      <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={clickNext}>
        Next level
      </button>
    );
  }
}

export default NextButton;
