import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/hire", name: "HireMe" }
    ];

    return (
        <>

            <nav className='bg-green-500 p-6 '>
                <ul className='md:flex justify-end'>
                    {
                        routes.map(loop => <Link key={loop.id} route={loop}></Link>)
                    }
                </ul>
            </nav>
           
        </>
    );
};

export default Navbar;
