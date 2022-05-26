const { useState, useEffect } = require("react")

const useEngineItems=()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const url ='http://localhost:5000/engine';
        fetch(url).then(res=>res.json()).then(data=>setItems(data))
    });
    return [items];
};

export default useEngineItems;