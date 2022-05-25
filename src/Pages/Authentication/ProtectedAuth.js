import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ProtectedAuth = () => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
    return (
        <div>
            
        </div>
    );
};

export default ProtectedAuth;