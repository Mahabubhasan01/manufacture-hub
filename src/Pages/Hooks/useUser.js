import { useEffect, useState } from "react"

const useUser=()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/user`
        fetch(url).then(res=>res.json()).then(data=>setUsers(data))
    },[]);
    return [users]
};
export default useUser;