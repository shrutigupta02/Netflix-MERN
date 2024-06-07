import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container } from '@mui/material';
import video from '../assets/trailer.mp4';
import { useNavigate } from 'react-router-dom';

export default function Player(){
    let navigate = useNavigate();

    return(
        <div className='bg-black'>
            <div 
            onClick={() => navigate(-1)} 
            className='top-5 left-5 absolute text-slate-300 cursor-pointer hover:underline'>
                <ArrowBackIcon/> 
                Go back
            </div>
            <Container className='bg-black h-screen w-screen relative top-0 bottom-0 left-0 right-0'>
                <video 
                src={video} autoPlay loop controls 
                className='top-0 left-0 absolute'
                />
                
            </Container>
        </div>
    )
}