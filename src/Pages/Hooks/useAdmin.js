import { useEffect, useState } from "react"

const useAdmin =()=>{
    const [admin,setAdmin] = useState([]);
    useEffect(()=>{
        const url = ``
        fetch(url).then(res=>res.json()).then(data=>setAdmin(data))
    },[]);
    return [admin]
};
export default useAdmin;