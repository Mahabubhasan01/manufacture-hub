const { useState, useEffect } = require("react")

const useTyersItems=()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const url ='http://localhost:5000/tyers';
        fetch(url).then(res=>res.json()).then(data=>setItems(data))
    });
    return [items];
};

export default useTyersItems;