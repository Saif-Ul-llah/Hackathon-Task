import { useState, useEffect  } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const checkUser=(e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("singin ",user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("erefkjhj",error);
    });
    }

  
return(

           <div className="main">
        <form onSubmit={checkUser} >
        <div id="first">
        <div id="login">
            <h2>Login</h2>
        <label>Email :</label>
            <input id="email" placeholder="Email" type="text" onChange={(e)=>{setEmail(e.target.value)}} />
            <label>Password :</label>
            <input id="contact" placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
            <input id="submit" type="submit" value="Login" />
        </div>
        </div>
        </form>
        </div>
    )
}
export default Login;