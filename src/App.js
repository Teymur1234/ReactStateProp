import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Form from './form';

function App() {
  const [name,setname]=useState('')
  const[info,setinfo]=useState('')
  const[surname,setsurname]=useState('')
  const[age,setage]=useState('')
  const[gender,setgender]=useState('')
  return (
    <div>
    <Form setAge={setage} setGender={setgender} setInfo={setinfo} setName={setname} setSurname={setsurname}></Form>
      <p>name:{name} surname:{surname} age:{age} info:{info} gender:{gender}</p>
  </div>
  );
  };

export default App;
