import { useEffect, useState } from "react"

const useReview =(email)=>{
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review/${email}`);
    },[email]);
    return [review]
};
export default useReview;