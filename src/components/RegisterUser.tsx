import React, { useState } from 'react';
import kwenikLogo from '../logo1000.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
//components
import { NavBar } from './NavBar';
import { ToastContainer, toast } from 'react-toastify';

//interface
//collect user info
//email,password, town & country
//later collect profile picture and a username
interface UserBio {
    email: string;
    password: string;
    confirmPassword: string;
    town: string;
    country: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const RegisterUser = (userBio: UserBio) => {
    const [email, setEmail] = useState(userBio.email);
    const [password, setPassword] = useState(userBio.password);
    const [confirmPassword, setConfirmPassword] = useState(userBio.confirmPassword);
    const [town, setTown] = useState(userBio.town);
    const [country, setCountry] = useState('Kenya');
    const [error, setError] = useState(false);
    //handler events
    const handleEmailChange = (e: InputEvent): void => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: InputEvent): void => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e: InputEvent): void => {
        setConfirmPassword(e.target.value);
    }
    const handleTownChange = (e: InputEvent): void  => {
        setTown(e.target.value);
    }
    const handleCountyChange = (e: InputEvent): void => {
        setCountry('Kenya');
    }
    //validate email & password
    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const validateEmail = () => {
        if(email !== ''){
            if(!isValidEmail(email)){
                setError(true)
            }else{
                setError(false)
            }
        }else{
            setError(false)
        }
    }
    //take user input
    function handleFormInputs(e: any){
        e.preventDefault();
        if(email && password && town !== '' ){
            //send this data to the backend
            console.log(email)
            console.log(password)
            console.log(town)
            console.log(country)
            //send data to the backend
            const user = {
                email: email,
                password: password,
                town: town,
                country: country
            }
            axios.post("http://localhost:3001/api/auth/signup", user).then((user)=>{
                //responses from backend
                console.log(user.data);
                toast.success(user.data)
            }).catch((error)=>{
                if(error.response){
                    console.log(error.response.data.message)
                    toast.error(error.response.data.message)
                }else if(error.request){
                    console.log(error.request)
                }
            })
        }
    }
    return(
        <div className="container-fluid">
            <NavBar/>
            <ToastContainer position='top-right' hideProgressBar={false} closeOnClick={false} pauseOnHover={false}/>
            <div className="row">
                <div className='col-sm-6 position-absolute h-100'>
                    <div className='kwenik-center-indiv'>
                        <img src="https://res.cloudinary.com/unloccode/image/upload/v1668010295/kwenikfaced_yfaogu.jpg" alt="" height={450} width={450} />
                    </div>
                </div>
                <div className='col-sm-6 position-absolute h-100 offset-sm-6'>
                    <div className='kwenik-center-indiv w-50'>
                        <form onSubmit={handleFormInputs}>
                            <div className='card border-0 kwenik-register-form'>
                                <div className='text-center'>
                                    <img src={kwenikLogo} alt="kwenikLogo" height={90} />
                                    <div style={{fontSize: '18px'}}>
                                        Create an account ...
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className="mb-3 mt-3">
                                        {
                                            error ?
                                            <input type="email" className='form-control' placeholder='Email' value={email} onChange={handleEmailChange} required onBlur={validateEmail} style={{border: '2px solid red'}}/>
                                            :
                                            <input type="email" className='form-control' placeholder='Email' value={email} onChange={handleEmailChange} required onBlur={validateEmail}/>
                                        }
                                    </div>
                                    <div className='mb-3'>
                                        <input type="password" className='form-control' placeholder='Password' value={password} onChange={handlePasswordChange} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="password" className='form-control' placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="text" className='form-control' placeholder='Town' value={town} onChange={handleTownChange} required />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="text" className='form-control' placeholder='Country' value={country} onChange={handleCountyChange} disabled />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className='card border-0 kwenik-register-form'>
                                    <div className='card-body'>
                                        <div>
                                            <button type='submit' className='btn w-100' style={{backgroundColor: '#30B98D', color: '#bfd200', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'}}>Sign Up</button>
                                            <div className='text-center mt-3'>
                                                <Link to='/login' style={{textDecoration: 'none', color: '#bfd200', fontWeight: 'bold'}}>
                                                    <span style={{fontSize: '14px'}}>
                                                        <i>
                                                            Sign in instead?
                                                        </i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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