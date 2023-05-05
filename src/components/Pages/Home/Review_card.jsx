import React from 'react';

const Review_card = ({ review_data }) => {
    const { id, name, image, review, location, reviewDate } = review_data
    return (
        <div>
            <div className='flex flex-wrap bg-black text-white justify-center items-center p-5 gap-3 mx-3 min-h-[300px] rounded-lg'>
                <div className='flex gap-3 items-center w-36'>
                    <div className='w-20 h-20 rounded-full overflow-hidden'>
                        <img className='h-full w-auto ' src={image} alt="" />
                    </div>
                    <div>
                        <h3 className='text-primary text-2xl mb-2 font-semibold uppercase'>{name}</h3>
                        <p className='text-xs mb-1 text-gray-300'>{location}</p>
                        <p className='text-xs text-gray-500'> {reviewDate}</p>
                    </div>
                </div>
                <div className=' text-gray-300 w-60 border-s-2 border-primary p-3'>
                    {review.slice(0, 110 )}
                </div>
            </div>
        </div>
    );
};

export default Review_card;