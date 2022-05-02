import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const FormExample = () => {

  const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState("");

  // const [login, setLogin] = useState({})

  // const handleChange = (e) => { //captura los datos
  //   const {name,value} = e.target
  //   setLogin({
  //     ...login, //los 3 puntos traen valores anteriores
  //     [name]:value})
  // }

  // const handleClick = () => { //muestra la  info
  //   console.log(login)
  // }

  console.log(login)

  return (
    <div>
      <form className="m-5 w-50" onSubmit={handleSubmit((data) => setLogin((data)))}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="Form-label">Email address</label>
    <input {...register('email')} name="email" type="email" className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="Form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
    <input {...register('password')} name="password" type="password" className="htmlForm-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 htmlForm-check">
    <input {...register('checkMe')} name="checkMe" type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default FormExample;