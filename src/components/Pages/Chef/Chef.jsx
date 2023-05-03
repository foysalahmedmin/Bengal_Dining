import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chef_info = useLoaderData()
    console.log(chef_info)
    const { id, chefPicture, name, description, location, yearsOfExperience, likes, numRecipes } = chef_info
    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/chef_banner_bg.jpg)",
        // backgroundImage: "url(/images/home_banner_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <section style={bannerStyle} className='pt-[5rem] '>
                <div className="container py-10 h-full flex justify-between gap-5 items-center text-white">
                    <div>
                        <img src={chefPicture} alt="" />
                    </div>
                    <div className='text-right'>
                        <h1 className='mb-5 font-bold text-4xl font-serif text-primary uppercase tracking-[5px]'>{name}</h1>
                        <h3 className='mb-1 tracking-[2px] font-semibold text-md font-serif max-w-xl'>{description}</h3>
                        <p className='mb-5 text-xs text-gray-300 tracking-[5px]'>{location}</p>
                            <p className=' text-gray-300 tracking-[5px] '><span className='text-primary font-bold text-md'>{yearsOfExperience}</span> Years Of Experience</p>
                            <p className=' text-gray-300 tracking-[5px]'><span className='text-primary font-bold text-md'>{numRecipes} </span> Special Recipes</p>
                        <p><span className='text-primary font-bold text-md'>{likes} </span> Likes</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Chef;