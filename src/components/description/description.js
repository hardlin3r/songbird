import React, { Fragment } from 'react';

function Description({ d }) {
  if(!d) {
    return (
      <div>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="row jumbotron random-bird">
        <div className="col-sm-6">
          <img className="img-fluid" src={d.image} alt={d.name} />
        </div>
        <div className="col-sm-6">
          <ul className="list-group random-bird">
            <li className="list-group-item list-group-item-action">
              {d.name}
            </li>
            <li className="list-group-item list-group-item-action">
              {d.species}
            </li>
            <li className="list-group-item">
              <audio controls>
                <source src={d.audio} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {d.description}
        </div>
      </div>
    </Fragment>
  );
}

export default Description;
