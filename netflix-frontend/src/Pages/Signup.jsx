import Container from '@mui/material/Container';
import BackgroundImage from '../Components/BackgroundImage';
import Header from '../Components/Header';
import { useState } from 'react';
import {firebaseAuth} from '../Utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
    let [formValues, setFormValues] = useState({
        email: "",
        password: "",
      });
    let [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

    let handleFormChange = (event)=>{
        setFormValues((currData)=>{
            return{
                ...currData,
                [event.target.name] : event.target.value
            }
        });
    }

    let handleSignIn = async()=>{
        try{
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log("added");
        }catch(err){
            console.log(err);
        }

        onAuthStateChanged(firebaseAuth, (currentUser)=>{
            if (currentUser) {
                navigate("/");
                console.log("success");
            }
        })
        
        //console.log(email, password);
    };

    return(
        <div className='relative flex justify-center items-center text-white top-0 left-0 h-screen w-screen'>
        <BackgroundImage className="top-0 left-0"></BackgroundImage>
        <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
            <Header login/>
            <div className='absolute flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0'>
                <div className="text-center text-xl">
                    <h1 className='font-extrabold text-6xl mb-5'>Unlimited movies, TV shows and more.</h1>
                    <h4 className='font-semibold mb-3 text-2xl'>Watch anywhere. Cancel anytime.</h4>
                    <h6 className='text-md mb-2'>
                    Ready to watch? Enter your email to create or restart membership.
                    </h6>
                </div>
                <div className="showPassword ? 'grid grid-cols-2' : 'grid grid-cols-[2fr_1fr] w-3/5'">
                    <input
                        type="email"
                        placeholder="Email address"
                        onChange={handleFormChange}
                        name="email"
                        value={formValues.email}
                        className='px-4 py-2 bg-white-100 text-black placeholder-gray-400 opacity-70 focus:outline-none rounded-l-md'
                    />
                    {showPassword && (
                            <input 
                            type="password"
                            placeholder='Password'
                            onChange={handleFormChange}
                            name="password"
                            value={formValues.password}
                            className='px-4 py-2 bg-white-100 text-black placeholder-gray-400 opacity-70 focus:outline-none rounded-r-md'
                            />
                    )}
                    {!showPassword && (
                        <button onClick={() => setShowPassword(true)}
                        className='px-6 py-2 bg-red-600 text-white font-bold rounded-r-md hover:bg-red-700 focus:outline-none'
                        >Get Started</button>
                    )}
                </div>
                {showPassword && <button onClick={handleSignIn}
                className='h-min  mt-2 px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none'
                >Sign Up</button>}
            </div>
      </div>
    </div>
  );
}