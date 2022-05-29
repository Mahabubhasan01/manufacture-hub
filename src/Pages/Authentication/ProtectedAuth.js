import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spiner/Spinner';


const ProtectedAuth = ({children}) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
    if(loading){
        return <Spinner/>
    }
    if(!user){
       return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default ProtectedAuth;