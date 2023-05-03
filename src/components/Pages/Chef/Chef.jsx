import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe_Card from './Recipe_Card';

const Chef = () => {
    const chef_info = useLoaderData()
    const { id, chefPicture, name, description, location, yearsOfExperience, likes, numRecipes, recipes } = chef_info
    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/chef_banner_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <section style={bannerStyle} className='pt-[5rem] '>
                <div className="container py-10 h-full flex justify-between flex-col lg:flex-row  gap-5 items-center text-white">
                    <div>
                        <img src={chefPicture} alt="" />
                    </div>
                    <div className='lg:text-right text-center'>
                        <h1 className='mb-5 font-bold text-4xl font-serif text-primary uppercase tracking-[5px]'>{name}</h1>
                        <h3 className='mb-1 tracking-[2px] font-semibold text-md font-serif max-w-xl'>{description}</h3>
                        <p className='mb-5 text-xs text-gray-300 tracking-[5px]'>{location}</p>
                        <p className=' text-gray-300 tracking-[5px] '><span className='text-primary font-bold text-md'>{yearsOfExperience}</span> Years Of Experience</p>
                        <p className=' text-gray-300 tracking-[5px]'><span className='text-primary font-bold text-md'>{numRecipes} </span> Special Recipes</p>
                        <p><span className='text-primary font-bold text-md'>{likes} </span> Likes</p>
                    </div>
                </div>
            </section>
            <section className='py-10 text-black'>
                <div className="container">
                    <div className='text-center max-w-2xl mb-10 mx-auto'>
                        <h3 className=' text-2xl mb-3'>My <span className='text-3xl font-bold text-primary'>R</span>recipes</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatum qui quia voluptate quam nisi!</p>
                    </div>
                    <div className='flex flex-wrap justify-around gap-5'>
                        {
                            recipes.map((recipe, index) => <Recipe_Card recipe_data={recipe} key={index} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Chef;