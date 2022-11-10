import React, { useState } from 'react';
import kwenikLogo from '../logo1000.png';

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
    //take user input
    function handleFormInputs(e: any){
        e.preventDefault();
        if(email && password && town !== '' ){
            //send this data to the backend
            console.log(email)
            console.log(password)
            console.log(confirmPassword)
            console.log(town)
            console.log(country)
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mt-5 mb-5"></div>
                <div className="col-sm-7">
                    <div>
                        <img src="https://res.cloudinary.com/unloccode/image/upload/v1668010295/kwenikfaced_yfaogu.jpg" alt="kwenik" style={{height: '600px', width: '600px'}} />
                    </div>
                </div>
                <div className="col-sm-5">
                    <div>
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
                                        <input type="email" className='form-control' placeholder='Email' value={email} onChange={handleEmailChange} required />
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
                                                <span style={{fontSize: '14px'}}>
                                                    <i>
                                                        Sign in instead?
                                                    </i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}