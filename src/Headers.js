import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './userSlice';



const Headers = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const auth=getAuth();

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid , email , displayName } = user;    
          dispatch(addUser({uid : uid , email:email , displayName:displayName})); // ...
          navigate("/browse");
          
        } else {
          dispatch(removeUser());
          navigate("/");
          // User is signed out
          // ...
        }


        return () => {
            unsubscribe();
          };
        }, [auth, dispatch, navigate]);
      });
      
        
    
      

    return(
        
<div class="Nets">
    <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" alt="logo1" />
    
    </div>

    
    
    )
}



export default Headers;

