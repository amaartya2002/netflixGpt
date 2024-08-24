import { RouterProvider , useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './userSlice';
import Login from "./Login";
import Error from "./Error";
import Browse from "./Browse";
import { useEffect } from "react";
const Body = () => {

  const auth = getAuth();
  const dispatch = useDispatch();




    return (
     <Router>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>


    );
  };

export default Body;