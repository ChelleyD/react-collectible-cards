import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function CardHead({
    name,
    avatar
}) {
    return (
        <div className='cardHead' style={{backgroundColor:"#799496"}}>
            <Typography gutterBottom variant="h3" component="div">
                {name}
            </Typography>

            <Avatar 
                alt="Zaun crest" 
                src={avatar} 
                sx={{ width: 65, height: 65 }}
            />
        </div>
    );
}

export default CardHead;