import React from 'react';

function Congratulations({ score, clickRestart }) {
  return (
    <div className="row jumbotron random-bird">
      <div className="col-sm text-center">
          <h1>Поздравляем!</h1>
          <p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
          <button type="button" className="btn btn-success btn-primary btn-lg btn-block" onClick={clickRestart}>
            Попробовать еще раз!
          </button>
      </div>
    </div>
  );
}

export default Congratulations;
