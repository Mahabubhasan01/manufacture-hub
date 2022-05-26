import React from 'react';
import useEngineItems from '../../../../Hooks/Products/useEngineItems';
import EngineItem from './EngineItem/EngineItem';

const Engine = () => {
    const [items]=useEngineItems([]);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
            {
                items.map(item=><EngineItem
                key={item._id}
                item={item}
                ></EngineItem>)
            }
        </div>
    );
};

export default Engine;