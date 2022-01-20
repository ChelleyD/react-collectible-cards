import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function CardSpecs({
    species,
    year_of_origin,
    abilities
}) {
    return (
        <div className='cardSpecs' style={{backgroundColor:"#799496"}}>
            <Typography variant="h5" component="div" className='specs'>
                Species: <Chip label={species} size="large" style={{backgroundColor:"#808080", color:"white", fontSize:"1rem"}}/>
            </Typography>

            <Typography variant="h5" component="div" className='specs'>
                Year of Origin: <Chip label={year_of_origin} size="large" style={{backgroundColor:"#808080", color:"white", fontSize:"1rem"}}/>
            </Typography>

            <Typography variant="h5" component="div" className='specs'>
                Abilities: 
                {abilities.map(ability => {
                    return (
                        <Chip label={ability} size="large" style={{backgroundColor:"#808080", color:"white", margin:"0 0.1rem", fontSize:"1rem"}}/>
                    );
                })
            }
            </Typography>  
        </div>
    );
}

export default CardSpecs;