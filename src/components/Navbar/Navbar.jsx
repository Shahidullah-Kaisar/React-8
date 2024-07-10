import React, { useState } from 'react';
import Link from '../Link/Link';
import { IoMdMenu} from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Circles } from 'react-loader-spinner' //react awsome components(8-44-8)
const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/hire", name: "HireMe" }
    ];

    return (
        <>
            
            <nav className='bg-green-500 p-6 fixed w-full'>

                <div className='flex'>
                    <h1 className='text-3xl text-red-700'>Jahangirnagar University</h1>

                    <span className='ml-6'>
                        <Circles
                            height="40"
                            width="40"
                            color="#7C277A"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </span>
                    
                </div>
                
                <div className='md:hidden text-3xl flex justify-end' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <ImCross/> : <IoMdMenu/>
                    }
                    
                </div>
                <ul className={`md:flex justify-end  absolute md:static bg-yellow-400 md:bg-inherit p-4 mt-6 md:-mt-10 ml-96 ${open === true ? 'top-20' : '-top-60' } duration-1000`}>
                    {
                        routes.map(loop => <Link key={loop.id} route={loop}></Link>)
                    }
                </ul>
            </nav>
           
        </>
    );
};

export default Navbar;
