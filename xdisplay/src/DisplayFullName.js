import React, { useEffect, useState } from 'react';

const DisplayFullName = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname,setLastName]=useState('')
  const [submit, setSubmit] = useState(false);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
    setSubmit(false)

  };
  const lastNameHandaler=(event)=>{
    setLastName(event.target.value)
    setSubmit(false)

  }
  const submitHandler = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setSubmit(true)
  };

  return (
    <>
    <h1>Full Name Display</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type='text' value={firstname} onChange={firstNameHandler} required/>
        </div>
        <div>
          <label>Lastname</label>
          <input type='text' value={lastname} onChange={lastNameHandaler} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submit && <p>{`Full Name: ${firstname} ${lastname}`}</p>}
    </>
  );
};

export default DisplayFullName;
