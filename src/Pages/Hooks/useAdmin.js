import { useEffect, useState } from "react"

const useAdmin =(email)=>{
    const [admin,setAdmin] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/user/${email}`
        fetch(url).then(res=>res.json()).then(data=>setAdmin(data))
    },[]);
    return [admin]
};
export default useAdmin;