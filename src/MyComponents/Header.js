import React , { useState } from 'react'

export const Header = (props) => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [dept, setdept] = useState()
    
    const submit = (e) => {
        e.preventDefault();
        if(!name || !email || !dept){
            alert("Please Enter Value")
        }
        props.addEmployee(name,email,dept);
    }



return (
        <div className='container my-3'>
            <h1 className='text-center'>Employee Detail Form</h1>



            <form onSubmit={submit}>
            <div className="mb-3">
                <label for="exampleInputName1" className="form-label">Name</label>
                <input value={name} onChange={(e) => {
                    setname(e.target.value)
                }} type="text" className="form-control" id="exampleInputName1" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input value={email} onChange={(e) => {
                    setemail(e.target.value)
                }} type="email" className="form-control" id="exampleInputEmail1" />
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Deparment</label>
                <input 
                value={dept} onChange={(e) => {
                    setdept(e.target.value)
                }} type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            
            <button type="submit" className=" btn btn-primary ">Submit</button>
            </form>

            
        </div>
    )
}
