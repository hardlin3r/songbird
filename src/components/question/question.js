import React from 'react';
import unknownBird from './unknown_bird.jpg';

let Question = React.forwardRef(({ success, answer }, ref) => {
  let name = success ? answer.name : "****"
  let img = success ? answer.image: unknownBird;
  return (
    <div className="row jumbotron random-bird">
      <div className="col-sm-6">
        <img className="img-fluid" src={img} alt={name} />
      </div>
      <div className="col-sm-6">
        <ul className="list-group random-bird">
          <li className="list-group-item list-group-item-action">
            {name}
          </li>
          <li className="list-group-item">
            <audio controls ref={ref}>
              <source src={answer.audio} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Question;
