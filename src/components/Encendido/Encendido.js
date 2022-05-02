import React, { useState } from 'react';

const Encendido = () => {
  const [encender, setEncender] = useState(true);
  const handleEncendido = () => {
    setEncender(!encender)
  }
  // const handleApagado = () => {
  //   setEncender(false)
  // }
  console.log(encender)

  return (
    <div>
      {encender ? 'Encendido' : 'Apagado'}
      <button className="btn btn-dark" onClick={handleEncendido}>Encender/Apagar</button>
      {/* <button className="btn btn-dark" onClick={handleApagado}>Encender/Apagar</button> */}
    </div>
  );
};

export default Encendido;