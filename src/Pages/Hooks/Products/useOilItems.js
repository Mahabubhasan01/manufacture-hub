const { useState, useEffect } = require("react")

const useOilItems=()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const url ='http://localhost:5000/oil';
        fetch(url).then(res=>res.json()).then(data=>setItems(data))
    });
    return [items];
};
export default useOilItems;
