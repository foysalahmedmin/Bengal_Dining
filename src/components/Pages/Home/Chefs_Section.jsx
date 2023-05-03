import React, { useEffect, useState } from 'react';
import Chefs_Card from './Chefs_Card';

const Chefs_Section = () => {
    const [chefs_info, setChefs_info] = useState([])
    useEffect(() => {
        fetch('https://bengal-dining-server-foysalahmedmin.vercel.app/')
            .then(res => res.json())
            .then(data => setChefs_info(data))
    }, [])
    return (
        <section className='py-10 text-black'>
            <div className="container">
                <div className='text-center max-w-2xl mb-10 mx-auto'>
                    <h3 className=' text-2xl mb-3'>Our <span className='text-3xl font-bold text-primary'>C</span>hefs</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatum qui quia voluptate quam nisi!</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        chefs_info.map(chef => <Chefs_Card chefInfo={chef} key={chef.id}></Chefs_Card>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Chefs_Section;