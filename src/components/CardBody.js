import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import CardHead from './CardHead';
import CardSpecs from './CardSpecs';
import ZaunCrest from "../images/ZaunCrest.png";
import PiltoverCrest from "../images/PiltoverCrest.png";
import Vi from "../images/Vi.jpeg";
import Jayce from "../images/Jayce.jpeg";
import Jinx from "../images/Jinx.jpeg";
import Mel from "../images/Mel.jpeg";
import Silco from "../images/Silco.png";
// import Grid from '@mui/material/Grid';

function CardBody() {
    const char_info = [
        {
          name: "Vi",
          avatar: ZaunCrest,
          image: Vi,
          species: "Human",
          year_of_origin: "970 AN - 973 AN",
          abilities: ["Brawler", "Leader", "Detective"]
        },
        {
            name: "Jinx (Powder)",
            avatar: ZaunCrest,
            image: Jinx,
            species: "Chemically Altered Human",
            year_of_origin: "975 AN",
            abilities: ["Inventor"]
          },
          {
            name: "Silco",
            avatar: ZaunCrest,
            image: Silco,
            species: "Chemically Altered Human",
            year_of_origin: "956 AN - 961 AN",
            abilities: ["Leader", "Teacher"]
          },
          {
            name: "Jayce Talis",
            avatar: PiltoverCrest,
            image: Jayce,
            species: "Human",
            year_of_origin: "963 AN - 966 AN",
            abilities: ["Diplomacy", "Inventor"]
          },
          {
            name: "Mel Medarda",
            avatar: PiltoverCrest,
            image: Mel,
            species: "Human",
            year_of_origin: "963 AN - 966 AN",
            abilities: ["Diplomacy", "Painting"]
          }
      ]

    return (
        char_info.map((info) => {
            return (
                <Card className='cardBody' sx={{
                    width: 290,
                    boxShadow: 2,
                    border: 5,
                    borderColor: "#CEC7C0"
                }}>
        
                <CardHead name={info.name} avatar={info.avatar}/>

                <CardMedia
                    component="img"
                    height="225"
                    image={info.image}
                    alt="violet from arcane"
                    className='charImg'
                /> 

                <CardSpecs 
                    species={info.species} 
                    year_of_origin={info.year_of_origin}
                    abilities={info.abilities}
                /> 
                </Card>
            );
        })    
    );
}

export default CardBody;