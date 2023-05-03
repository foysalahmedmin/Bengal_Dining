import React from 'react';

const Loading = () => {
    return (
        <div>
            <span className="relative text-center justify-center flex h-[50px] w-[50px] mx-auto">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[50px] w-[50px] bg-primary"></span>
            </span>
        </div>
    );
};

export default Loading;