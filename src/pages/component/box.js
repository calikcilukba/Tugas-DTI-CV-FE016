import React from 'react';

const Box = (props) => {
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img class="box" src={props.obj.image}></img>
          <span class="card-title" style={{ color: 'black' }}>
            {props.obj.title}
          </span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">+</i>
          </a>
        </div>
        <div class="card-content weight-400">
          <p>{props.obj.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
