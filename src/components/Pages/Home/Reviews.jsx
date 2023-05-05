import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Review_card from './Review_card';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bengal-dining-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className='py-10'>
            <div className="container">
                <div className='text-center max-w-2xl mb-10 mx-auto'>
                    <h3 className=' text-2xl mb-3'>Client <span className='text-3xl font-bold text-primary'>R</span>eviews</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatum qui quia voluptate quam nisi!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            reviews.map(review => <Review_card review_data={review} key={review.id}></Review_card>)
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Reviews;