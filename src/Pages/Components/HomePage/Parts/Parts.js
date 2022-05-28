import React from 'react';
import useParts from '../../../Hooks/useParts';
import PartItem from './PartItem/PartItem';
import './Parts.css'

const Parts = () => {
  const [parts]=useParts();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
          {
            parts.map(part=><PartItem
            key={part._id}
            part={part}
            />)
          }
        </div>
    );
};

export default Parts;