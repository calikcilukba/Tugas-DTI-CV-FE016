import React from 'react';

const Box = (props) => {
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img class="box" src={props.obj.image} alt={props.obj.alt}></img>
          <span class="card-title" style={{ color: 'black' }}>
            {props.obj.title}
          </span>
          <button class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">+</i>
          </button>
        </div>
        <div class="card-content weight-400">
          <p>{props.obj.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
