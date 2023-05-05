import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { logIn, logIn_with_google, logIn_with_gitHub  } = useContext(AuthContext)
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
    const googleLogInHandler = () => {
        logIn_with_google()
        .then(result => {
            navigate(from, { replace: true })
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorMessage)
        });
    }
    const githubLogInHandler = () => {
        logIn_with_gitHub()
        .then(result => {
            navigate(from, { replace: true })
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorMessage)
        });
    }

    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/logIn_register_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <section style={bannerStyle} className='h-screen'>
            <div className="pt-[5rem] container py-10 min-h-screen flex justify-center lg:flex-row gap-5 items-center text-white">
                <div className='w-full lg:w-1/2 overflow-hidden'>
                    <h1 className='text-center uppercase font-serif text-3xl mb-5'>Log-In</h1>
                    <form onSubmit={logInHandler} className='min-w-3xl' action="">
                        <div>
                            <label htmlFor="email"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="email" name="email" id="email" placeholder='Email' required />
                            <label htmlFor="password"></label>
                            <input className='w-full py-2 px-5 rounded-full bg-transparent border-2 border-white' type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn primary-btn w-full text-white' type="submit" value="Submit" />
                    </form>
                    <p className='text-center py-3'>New User? <Link to='/register' className='text-primary'>Register</Link> First. </p>
                    <div className='flex gap-3'>
                        <button onClick={googleLogInHandler} className='btn btn-outline btn-primary rounded-full flex-1'>
                            <FaGoogle /> <span className='ml-3'>Register With Google</span>
                        </button>
                        <button onClick={githubLogInHandler} className='btn btn-outline btn-primary rounded-full flex-1'>
                            <FaGithub /> <span className='ml-3'>Register With GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;