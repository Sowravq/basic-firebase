import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [information,setInformation] = useState(null);
    const auth = getAuth(app);
    const goolleDrovbider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const handelGoogle =()=>{
        signInWithPopup(auth,goolleDrovbider)
        .then(result=>{
         const user =result.user;
          console.log(user);
         setInformation(user);
         
        })
        .catch(error=>{
            const erros = error.message;
            
             setInformation(erros);
        })
    }
    const handleLogOut = ()=>{
        signOut(auth)
        .then(results=>{
           console.log(results);
          setInformation(null)
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    const handelGithub =()=>{
            signInWithPopup(auth,githubProvider)
            .then(result=>{
                const githubUser = result.user;
                console.log(githubUser);
                setInformation(githubUser);
            })
            .catch(error=>{
                console.log(error);
            })
    }
    return (
        <div>
             {information &&
               <div>
                <h1>{information.displayName}</h1>
                <h2>{information.email}</h2>
                <img src={information.photoURL} alt="" />
               </div>

             }
           { information?
           <button onClick={handleLogOut}>Sing Out</button>:
            <div>
                <button onClick={handelGoogle}>Sing In </button>
                <button onClick={handelGithub}>Github singin </button>
            </div>
           }
        </div>
    );
};

export default Login;