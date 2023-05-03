import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive? "text-lg text-primary font-semibold border-b-2 border-primary" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;