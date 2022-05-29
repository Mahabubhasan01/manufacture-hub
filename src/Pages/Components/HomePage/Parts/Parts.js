import React from 'react';
import useParts from '../../../Hooks/useParts';
import PartItem from './PartItem/PartItem';
import './Parts.css'

const Parts = () => {
  const [parts]=useParts();
    return (
        <div>
          <p className='text-4xl font-bold text-center my-10 text-primary'>Our Products</p>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-5'>
          {
            parts.map(part=><PartItem
            key={part._id}
            part={part}
            />)
          }
        </div>
        </div>
    );
};

export default Parts;