import React from 'react';
import CustomCard from '../../../Shared/CustomCard';

const Business = () => {
    

    return (
        <div >
            <h1 className="font-bold text-4xl text-center md:mb-16">Our Business Summary </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 banner'>
            <CustomCard info={'Countries'} number={222}/>
            <CustomCard info={'Our Revenue'} number={'23 Billion'} />
            <CustomCard info={'Export Products'} number={64363456}/>
            <CustomCard info={'Quality'} number={'99.99%'}/>
        </div>
        </div>
    );
};

export default Business;