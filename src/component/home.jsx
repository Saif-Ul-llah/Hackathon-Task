import { getAuth, signOut } from "firebase/auth";
import './App.css';

function Home(){
        
    const logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.

        }).catch((error) => {
        // An error happened.
        });

    }
return(
     <div className="main">
        <nav>
            <ul>
                <li><button onClick={logout} >Logout</button></li>
            </ul>
        </nav>
     </div>
    )
}
export default Home;