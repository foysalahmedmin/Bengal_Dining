import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { register } = useContext(AuthContext)
    const registerHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const email = form.email.value
        const password = form.password.value
        const con_password = form.con_password.value
        setError('')
        if (password !== con_password) {
            setError('Your Password did not match!')
        } else if (password.length < 6) {
            setError('Password must be 6 disits')
        } else {
            console.log(name, image_url, email, password, con_password)
            register(email, password)
                .then(result => {
                    console.log(result.user)
                    navigate('/', { replace: true })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage)
                    console.log(errorMessage)
                });
        }
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
                <div className='max-w-xl overflow-hidden'>
                    <h1 className='text-center uppercase font-serif text-3xl mb-5'>Register</h1>
                    <form onSubmit={registerHandler} className='min-w-3xl mb-5' action="">
                        <div>
                            <label htmlFor="name"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="text" name="name" id="name" placeholder='Name' required />
                            <label htmlFor="image_url"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="text" name="image_url" id="image_url" placeholder='Image URL' />
                            <label htmlFor="email"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="email" name="email" id="email" placeholder='Email' required />
                            <label htmlFor="password"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-full bg-transparent border-2 border-white' type="password" name="password" id="password" placeholder='Password' required />
                            <label htmlFor="con_password"></label>
                            <input className='w-full py-2 px-5 rounded-full bg-transparent border-2 border-white' type="password" name="con_password" id="con_password" placeholder='Confirm Password' required />
                        </div>
                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn primary-btn w-full text-white' type="submit" value="Submit" />
                    </form>
                    <div className='flex gap-3'>
                        <button className='btn btn-outline btn-primary rounded-full flex-1'>
                            <FaGoogle /> <span className='ml-3'>Register With Google</span>
                        </button>
                        <button className='btn btn-outline btn-primary rounded-full flex-1'>
                            <FaGithub /> <span className='ml-3'>Register With GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;