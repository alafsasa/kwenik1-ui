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
            <NavBar/>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <div className="card mt-5">
                        <div className="card-body">
                            <table className="w-100">
                                <tbody>
                                    <tr>
                                        <td className="w-50" style={{height: '400px'}}>
                                            <div className="kwenik-login-form">
                                                <div className="text-center">
                                                    <img src={kwenikLogo} alt="kwenik" height={60} width={60} />
                                                    <div>
                                                        <span style={{fontSize: '30px'}}>KWENIK</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="w-50">
                                            <div>
                                                <form onSubmit={handleFormInputs}>
                                                    <div className="mb-3 mt-3">
                                                        <input type="email" className="form-control" placeholder="Email" value={mail} onChange={handleEmailChange} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input type="password" className="form-control" placeholder="Password" value={pass} onChange={handlePasswordChange} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <button type="submit" className="btn w-100" style={{backgroundColor:' #30B98D', color: '#bfd200', cursor: 'pointer'}} > Sign In</button>
                                                    </div>
                                                    <div className="mb-3">
                                                        <i>
                                                            Forgot password?
                                                        </i>
                                                    </div>
                                                    <div className="mb-3">
                                                        <Link to='/register'>
                                                            Create an account instead.
                                                        </Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}