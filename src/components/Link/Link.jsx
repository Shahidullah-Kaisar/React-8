import React from 'react';

const Link = ({route}) => {
    return (
        <>
            <li className='ml-10 text-2xl mr-6'>
                <a className='hover:bg-yellow-600 duration-500 hover:p-6 rounded-lg' href={route.path}>{route.name}</a>
            </li>
        </>
    );
};

export default Link;