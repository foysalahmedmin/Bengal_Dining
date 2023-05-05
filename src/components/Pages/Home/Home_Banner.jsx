import React from 'react';

const Home_Banner = () => {
    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/home_banner_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <section style={bannerStyle} className='pt-[5rem] h-96 md:h-screen'>
            <div className="container h-full flex justify-center items-center text-center text-white">
                <div>
                    <h1 className='mb-5 font-bold text-4xl font-serif text-primary uppercase tracking-[5px] [text-shadow:_0_0_15px_rgb(168_121_65)]'>Welcome</h1>
                    <h3 className='mb-3 tracking-[2px] font-semibold text-2xl font-serif'>Experience the rich flavors of Bengal cuisine <br /> in every bite, at Bengal Dining!</h3>
                    <p className='mb-5 text-xs text-gray-300 tracking-[5px]'>WE ARE READY</p>
                    <a href="#chef_menu"><button className='btn primary-btn'>Chefs Menu</button></a>
                </div>
            </div>
        </section>
    );
};

export default Home_Banner;