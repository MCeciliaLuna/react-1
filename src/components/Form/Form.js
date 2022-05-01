import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [number,setNumber] = useState(500);
  const handleSuma = () =>{
    setNumber(number + 1)
  }
  const handleResta = () =>{
    setNumber(number - 1)
  }
  // const handleClick = () =>{
  //   // console.log('funciona!!!')
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(json => console.log(json))
  // }
  return (
    <div>
     <p className='m-23'>
      {number}
     </p>
     <button className="btn-primary m-3 rounded" onClick={handleSuma}>Sumar!</button>
     <button className="btn-primary m-3 rounded" onClick={handleResta}>Restar!</button>
    </div>
  )
    /* <form>
      <label htmlFor="nombre" className="mx-3">Nombre: </label>
      <input type="text" name="" id="" required/>
      </form>*/
      
}

export default Form;