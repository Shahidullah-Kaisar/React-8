import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {price, currency, features, duration} = option;
    return (
        <>
        
            <div className='bg-blue-500 rounded-xl p-10 mb-6 mr-14 text-3xl text-white flex flex-col'>
                
                <div className='text-center'>
                    <h1 className='mt-8'>Price:{price}</h1>
                    <h1>Duration: {duration}</h1>
                    <h1 className='mb-4'>Name: {currency}</h1>
                </div>
                
                <div className='ml-6 flex-grow'>
                    {
                    features.map(loop => <Features feature={loop}></Features>)
                    }
                </div>
                <button className='bg-green-600 mt-6 p-4 w-full hover:bg-green-900 duration-500 rounded-xl'>Buy Now</button>
               
            </div>
        </>
    );
};

export default PriceOption;