import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function CardHead({
    name,
    avatar
}) {
    return (
        <div className='cardHead' style={{backgroundColor:"#799496"}}>
            <Typography gutterBottom variant="h4" component="div">
                {name}
            </Typography>
            <Avatar 
                alt="Zaun crest" 
                src={avatar} 
                sx={{ width: 56, height: 56 }}
            />
        </div>
    );
}

export default CardHead;