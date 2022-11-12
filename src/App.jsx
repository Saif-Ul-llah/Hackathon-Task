import { useState, useEffect  } from "react";
import './App.css';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Login from "./component/login";

// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


function App() {

   const [isLogin, setIsLogin] = useState(false);
   useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
        // ...
      } else {
        // User is signed out
        // ...
        setIsLogin(false);
      }
    }); 
   },[])


  return (


<div>
{
      (isLogin) ? <Home /> : <Login/>
    }
 
</div>
  );
}

export default App;


