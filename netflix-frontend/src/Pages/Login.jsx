import Container from '@mui/material/Container';
import BackgroundImage from '../Components/BackgroundImage';
import Header from '../Components/Header';
import { useState } from 'react';
import {firebaseAuth} from '../Utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Email } from '@mui/icons-material';

export default function Login(){
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    let isUser = false;
    let [wrongPass, setWrongPass] = useState(false);

    let updateEmail = (event)=>{
        setEmail(event.target.value);
    }

    let updatePassword = (event)=>{
        setPassword(event.target.value);
    }

    let handleLogin = async(event)=>{
        event.preventDefault();
        try{
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log("logged in");
            isUser = true;
            setWrongPass(false);
        }catch(err){
            console.log(err.code);
            setWrongPass(true);
            setEmail("");
            setPassword("");
        }

        onAuthStateChanged(firebaseAuth, (currentUser)=>{
            if (currentUser && isUser) {
                navigate("/");
                console.log("success");
            }
        })
        
        //console.log(email, password);
    };
 
    return(
        <div className="relative flex justify-center items-center h-screen w-screen bg-cover bg-center">
            <BackgroundImage />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <Header signup />
                <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-md w-full">
                    <form className="flex flex-col">
                        <h1 className="text-3xl mb-5 font-bold text-white">Log In</h1>
                        <input
                            type="text"
                            placeholder="Email or mobile number"
                            onChange={updateEmail}
                            value={email}
                            className="px-4 py-2 bg-gray-700 text-white opacity-70 focus:outline-none border border-gray-100 rounded-sm mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={updatePassword}
                            value={password}
                            className="px-4 py-2 bg-gray-700 text-white opacity-70 focus:outline-none border border-gray-100 rounded-sm mb-4"
                        />
                        <button onClick={handleLogin}
                        className="mb-4 px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none">
                            Log In
                        </button>
                    </form>
                    {wrongPass && <p className=' font-bold bg-amber-300 p-2 rounded-sm'>Invalid login details!</p>}
                    <p className="text-gray-400 mt-4">
                        New to Netflix? <a href="/signup" className="text-white font-medium hover:underline">Sign up now.</a>
                    </p>
                    
                </div>
            </div>
        </div>

  );
}