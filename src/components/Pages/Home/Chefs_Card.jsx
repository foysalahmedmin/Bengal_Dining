import React from 'react';
import { Link } from 'react-router-dom';

const Chefs_Card = ({ chefInfo }) => {
    console.log(chefInfo)
    const {id, chefPicture, name, description, yearsOfExperience, likes, numRecipes} = chefInfo
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-80 w-80'  src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p className='mb-0 max-w-xs'>{description.slice(0, 100)}...</p>
                    <div className='flex flex-wrap justify-between'>
                        <p>Experience: <span className='text-primary'>{yearsOfExperience}</span></p>
                        <p>Recipes: <span className='text-primary'>{numRecipes}</span></p>
                    </div>
                    <p>Like: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to= {`/chef/${id}`}><button className="btn primary-btn text-white">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs_Card;