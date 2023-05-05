import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/about_banner.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed'
    }
    return (
        <section style={bannerStyle} className='p-10'>
            <div className="container">
                <div className='text-center max-w-xl mb-10 mx-auto text-white'>
                    <h3 className=' text-2xl mb-3'>
                        Some words <span className='text-3xl font-bold text-primary'>A</span>bout us</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatum qui quia voluptate quam nisi!</p>
                </div>
                <div className=" max-w-3xl bg-primary bg-opacity-25 p-5 mx-auto border-2 rounded-lg border-white text-center text-white">
                    <div>
                        <h1 className='mb-5 font-bold text-xl font-serif text-primary uppercase tracking-[5px] [text-shadow:_0_0_15px_rgb(168_121_65)]'>
                            Discover the taste of Bengal and savor the flavors of our culture at Bengal Dining!
                        </h1>
                        <h3 className='mb-3 tracking-[1px] font-serif'>
                            Bengal Dining is a restaurant that serves traditional Bengali cuisine in a warm and inviting ambiance. The menu includes appetizers, entrees, and desserts made with meat or vegetables. The restaurant also offers fusion dishes that combine Bengali flavors with other culinary traditions. Bengal Dining is the perfect place to experience the rich and diverse culinary traditions of the Bengal region.
                        </h3>
                        <p className='mb-5 text-xs text-gray-300 tracking-[5px] uppercase'>Service Is Our Main Priority</p>
                        <Link to='/about'><button className='btn primary-btn'>Read More About Us</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;