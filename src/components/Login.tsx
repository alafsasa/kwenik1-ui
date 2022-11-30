import React, { useState } from "react";
import kwenikLogo from '../logo1000.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";

interface UserBioLogins {
    email: string;
    password: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>

export const Login: React.FC<UserBioLogins> = ({email, password}) => {
    const [mail, setMail] =useState(email);
    const [pass, setPass] = useState(password);
    //handler events
    const handleEmailChange = (e: InputEvent) => {
        setMail(e.target.value);
    }
    const handlePasswordChange = (e: InputEvent) => {
        setPass(e.target.value);
    }
    //submit
    function handleFormInputs(e: any){
        e.preventDefault();
        if(mail && pass !== ''){
            console.log(mail)
            console.log(pass)
            const user = {
                email: mail,
                password: pass
            };
            axios.post("http://localhost:3001/api/auth/login", user).then((user)=>{
                console.log(user);
            }).catch((error)=>{
                if(error.response){
                    console.log(error.response.data)
                }else if(error.request){
                    console.log(error.request)
                }
            })
        }else{
            console.log('No data inputed!');
        }
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 position-absolute h-100 kwenik-bg">
                    <div className="p-2">
                        <h4 style={{fontWeight: 'bold'}}>Kwenik</h4>
                    </div>
                    <div className="kwenik-center-indiv">
                        <img src={kwenikLogo} alt="kwenik logo" width={200} height={200} />
                    </div>
                </div>
                <div className="col-sm-6 offset-sm-6 position-absolute h-100">
                    <div className="kwenik-center-indiv w-50">
                        <form onSubmit={handleFormInputs}>
                            <div className="mb-3 mt-3">
                                <div className="display-4" style={{color: '#bfd200', fontWeight: 'bold'}}>
                                    Log in
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" value={mail} onChange={handleEmailChange} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" value={pass} onChange={handlePasswordChange} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn w-100" style={{backgroundColor:' #30B98D', color: '#bfd200', cursor: 'pointer', fontWeight: 'bold'}} > Sign In</button>
                            </div>
                            <div className="mb-3">
                                <i>
                                    Forgot password?
                                </i>
                            </div>
                            <div className="mb-3">
                                <Link to='/register' style={{textDecoration: 'none', color: '#bfd200', fontWeight: 'bold'}}>
                                    Create an account instead.
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div style={{position: 'absolute', bottom: '16px', right: '40%', color: '#969696', fontSize: '14px'}}>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}