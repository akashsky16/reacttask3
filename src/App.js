import './App.css';
import { Header } from './MyComponents/Header';
import React, { useState } from 'react'; 
import { Display } from './MyComponents/Display';

function App() {

  const [flag, setflag] = useState(false)
  const [employee, setemployee] = useState([]);
  
  const setFlag = () => {
    setflag(false)
  }



  const addEmployee = (name,email,dept) => {
    console.log("Addes",name,email,dept);
    let sno;
    if(employee.length===0){
       sno=1;
    }
    else{
      sno = employee[employee.length-1].sno;
    }
    const tempObj=  {
      sno:sno+1,
      name: name,
      email: email,
      dept:dept
    } 
     setemployee([...employee,tempObj]);
     
       setflag(true)
     console.log(employee);

  }

  return (
    <>
    {flag?<Display employee={employee} flag={flag} setFlag={setFlag}/> :<Header addEmployee={addEmployee}/>}
    
    
    </>
  );
}

export default App;
