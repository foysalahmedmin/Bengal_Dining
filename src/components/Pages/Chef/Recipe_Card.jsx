import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css';

const Recipe_Card = ({ recipe_data }) => {
    const [favorite, setFavorite] = useState(false)
    const { recipeName, ingredients, cookingMethod, instructions, rating } = recipe_data;
    const favoriteHandler = () => {
        console.log("hello")
        setFavorite(!favorite);
        if (!favorite) {
            toast.success('The recipe is your favorite :)', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.info('Unselected !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-center m-auto uppercase block w-full p-3 mb-5 bg-[#A8794178]">{recipeName}</h2>
                <p className='uppercase'>ingredients:</p>
                <ul className='list-disc'>
                    {
                        ingredients.map(x => <li className='bg-gray-100 mb-3 capitalize p-3'>{x}</li>)
                    }
                </ul>
                <p className='uppercase'>Cooking Method: <span className='capitalize text-primary font-bold text-md'>{cookingMethod}</span></p>
                {/* <p>Instructions: {instructions}</p> */}
                <p className='uppercase flex items-center gap-4'><Rating
                    style={{ maxWidth: 130 }}
                    value={rating}
                    readOnly
                /> <span className='capitalize text-primary font-bold text-lg'>{rating}</span></p>

                <div className="card-actions justify-end">
                    {
                        favorite ?
                            <button onClick={favoriteHandler} className="btn primary-btn text-white" disabled >Favorite</button>
                            : <button onClick={favoriteHandler} className="btn primary-btn text-white" >Favorite</button>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipe_Card;