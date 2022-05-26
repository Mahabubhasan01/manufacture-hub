import React from 'react';
import CustomCard from '../../../Shared/CustomCard';

const Business = () => {
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
            <CustomCard info={'Countries'} number={222}/>
            <CustomCard info={'Our Revenue'} number={'2342 Million'} />
            <CustomCard info={'Export Products'} number={64363456}/>
            <CustomCard info={'Quality'} number={99.99}/>
        </div>
    );
};

export default Business;