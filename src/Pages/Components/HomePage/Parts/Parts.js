import React from 'react';
import useParts from '../../../Hooks/useParts';
import Spinner from '../../../Shared/Spiner/Spinner';
import PartItem from './PartItem/PartItem';
import './Parts.css'

const Parts = () => {
  const [parts]=useParts();
  /* if(!parts){
    return <Spinner/>
  } */
  console.log(parts)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
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