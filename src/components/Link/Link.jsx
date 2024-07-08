import React from 'react';

const Link = ({route}) => {
    return (
        <>
            <li className='ml-10 text-2xl mr-6'>
                <a href={route.path}>{route.name}</a>
            </li>
        </>
    );
};

export default Link;