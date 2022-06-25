import React, {SyntheticEvent, useState} from "react";
import axios from 'axios';
import {Navigate} from "react-router-dom";
import './Register.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Register = () => {
    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const[error, setErrorText] = useState('');

    const[redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            first_name,
            last_name,
            email,
            password
        }
        console.log(data);
        const res = await axios.post('http://localhost:8080/auth/register',data);
        console.log(res);

        //Success pri registraciji -> preusmeritev na login page
        if (res.status == 201) {
            setRedirect(true);
        }

        if (res.status != 201) {
            setErrorText('Napaka v podatkih');
            console.log(error);
        }

    }

    if (redirect) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>Register</h1>
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingFirstName"
                           placeholder="First name"
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <label htmlFor="floatingFirstName">First name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingLastName"
                           placeholder="Last name"
                           onChange={(e) => setLastName(e.target.value)}/>
                    <label htmlFor="floatingLastName">Last name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;