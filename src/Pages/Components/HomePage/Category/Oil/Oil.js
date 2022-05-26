import React from 'react';
import useOilItems from '../../../../Hooks/Products/useOilItems';
import OilItems from './OilItems';

const Oil = () => {
    const [items]=useOilItems([]);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
            {
                items.map(item=><OilItems
                key={item._id}
                item={item}
                ></OilItems>)
            }
        </div>
    );
};

export default Oil;