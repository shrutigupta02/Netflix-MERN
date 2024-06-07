import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";


export default function Header(props){
    const navigate = useNavigate()

    return(
        <div className='fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50'>
            <div className="p-4">
            <img src={logo} alt="logo" className='h-12'/>
            </div>
            <button onClick={() => navigate((props.login) ? "/login" : "/signup")}
                className='text-white font-semibold bg-red-600 py-2 px-4 rounded-md hover:bg-red-700 transition duration-300'
            >
                {props.login ? "Log In" : "Sign Up"}
            </button>
        </div>
    )
}