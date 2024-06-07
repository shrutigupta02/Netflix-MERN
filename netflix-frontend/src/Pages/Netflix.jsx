import { useState } from "react";
import Navbar from "../Components/Navbar";

export default function Netflix(){
    let [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled((window.scrollY === 0)? false: true);
        return () => (window.onscroll = null);
    }

    return(
        <div>
            <Navbar isScrolled={isScrolled}/>
        </div>
    );
}