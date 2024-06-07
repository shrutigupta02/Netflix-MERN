import background from "../assets/login.jpg";
import { Container } from "@mui/material";

export default function BackgroundImage(){
    return(
        <Container className="h-screen">
            <img src={background} className="h-screen"/>
        </Container>
    )
}