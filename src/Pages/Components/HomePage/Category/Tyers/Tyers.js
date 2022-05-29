import React from 'react';
import useTyersItems from '../../../../Hooks/Products/useTyersItems';
import TyerItems from './TyersItem/TyerItems';

const Tyers = () =>{
    const [items]=useTyersItems([]);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
            {
                items.map(item=><TyerItems
                key={item._id}
                item={item}
                />)
            }
        </div>
    );
};

export default Tyers;