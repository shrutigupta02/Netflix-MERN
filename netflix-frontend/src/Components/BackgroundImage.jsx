import background from "../assets/login.jpg";
import { Container } from "@mui/material";

export default function BackgroundImage(){
    return(
        <div className="h-screen w-screen">
            <img src={background} className="h-screen w-screen"/>
        </div>
    )
}