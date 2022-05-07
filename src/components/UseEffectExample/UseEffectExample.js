import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {

  const [contador,setContador] = useState(0)

  const handleConsoleLog = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${contador}`)
    .then(response => response.json())
    .then(json => console.log(json))
   }
  // handleConsoleLog() ESTO NO SE HACE > MALA PRÁCTICA POR TEMAS DE RENDERIZADO

  useEffect(() => { //use effect sin ninguna dependencia (cuando se busca que una función se ejecute cada vez que se cambia de estado) para que se cargue mientras se monta la aplicación sin ninguna dependencia esa función
    handleConsoleLog()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [contador]) //sin el contador ejecuta la función una sola vez que arranca el renderizado, no detecta el cambio del contador
  
  return (
    <div>
      <h2>Use effect example</h2>
      <button onClick={()=> setContador(contador + 1)}>Clickeame!</button>
    </div>
  );
};

export default UseEffectExample;