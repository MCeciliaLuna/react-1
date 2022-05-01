import React from 'react';

const Information = (props) => {
  return (
    <div className="m-5 w-25">
      <h2>{props.nombre}</h2>
      <h5>{props.edad}</h5>
      <h5>{props.altura}</h5>
      <h5>{props.descripción}</h5>
      <p>Lorem </p>
    </div>
  );
};

export default Information;