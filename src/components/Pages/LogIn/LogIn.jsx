import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { logIn } = useContext(AuthContext)
    const logInHandler = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            });
        console.log(email, password)
    }

    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/logIn_register_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <section style={bannerStyle} className='pt-[5rem] h-screen'>
            <div className="container py-10 h-full flex justify-center md:justify-start flex-col lg:flex-row  gap-5 items-center text-white">
                <div className='max-w-xl'>
                    <h1 className='text-center uppercase font-serif text-3xl mb-5'>Log-In</h1>
                    <form onSubmit={logInHandler} className='min-w-3xl mb-5' action="">
                        <div>
                            <label htmlFor="email"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="email" name="email" id="email" placeholder='Email' required />
                            <label htmlFor="password"></label>
                            <input className='w-full py-2 px-5 rounded-full bg-transparent border-2 border-white' type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn primary-btn w-full text-white' type="submit" value="Submit" />
                    </form>
                    <p className='text-center'>New User? <Link to='/register' className='text-primary'>Register</Link> First. </p>
                </div>
            </div>
        </section>
    );
};

export default LogIn;