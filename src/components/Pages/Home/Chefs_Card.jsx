import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { AiTwotoneHeart } from "react-icons/ai";

const Chefs_Card = ({ chefInfo }) => {
    const { id, chefPicture, name, description, yearsOfExperience, likes, numRecipes } = chefInfo
    return (
        <div>
            <LazyLoad>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='h-80 w-80' src={chefPicture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{name}</h2>
                        <p className='mb-0 max-w-xs'>{description.slice(0, 100)}...</p>
                        <div className='flex flex-wrap justify-between'>
                            <p>Experience: <span className='text-primary'>{yearsOfExperience}</span></p>
                            <p>Recipes: <span className='text-primary'>{numRecipes}</span></p>
                        </div>
                        <p className='flex gap-3 items-center'><AiTwotoneHeart className='text-red-500 text-lg' /> <span className='text-primary'>{likes}</span> <span>Likes</span></p>
                        <div className="card-actions justify-end">
                            <Link to={`/chef/${id}`}><button className="btn primary-btn text-white">View Recipes</button></Link>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        </div>
    );
};

export default Chefs_Card;