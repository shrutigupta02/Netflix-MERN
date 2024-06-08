import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase-config";
import {onAuthStateChanged } from 'firebase/auth';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar(){
    const links = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
      ];
    let navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if (!currentUser) {
            navigate("/signup");
            console.log("success");
        }
    })
    
    let redirectToLink = (link)=>{
        navigate(link);
    }

    return(
        
        <div className="bg-black text-gray-100 flex items-center justify-between px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <img className="h-12" src="/src/assets/logo.png" alt="Logo"/>
                </div>
                <div>
                    <ul className="flex space-x-4 ml-4">
                        {links.map((link) => (
                            <li key={link.name} className="hover:underline cursor-pointer" onClick={()=>redirectToLink(link.link)}>{link.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="bg-gray-700 pr-2 rounded-md">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 bg-gray-700 text-white placeholder-white opacity-70 focus:outline-none rounded-md"
                    />
                    <SearchOutlinedIcon className="cursor-pointer"/>
                </div>
                <div>
                    <button
                        onClick={() => signOut(firebaseAuth)}
                        className="ml-2 text-white font-semibold bg-red-600 py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Sign out
                    </button>
                </div>
            </div>
            
        </div>

    );
}