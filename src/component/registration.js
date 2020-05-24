import React, {Component, useEffect, useState} from "react";
import axios from 'axios'

function Reg(){

    const [username, setUsername] = useState('')
    const [password, setPass] = useState('')

    useEffect(()=>{
        console.log('')
    })

    function setValuePass(e){

        setPass(e.target.value)
    }

    function setValueName(e){

        setUsername(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()

        const newUser = {
            username: username,
            password: password
        }

        console.log(newUser)
        axios.post('http://localhost:5000/registration', newUser)
            .then(res => console.log(res.data))


    }
        return(
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Enter username" onChange={setValueName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={setValuePass}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
}

export default Reg