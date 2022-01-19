import Typography from '@mui/material/Typography';

function PageHead() {
    return (
        <div className='pageHead'>
            <Typography variant="h1" component="div" style={{fontWeight: 350}}>
                ARCANE 
            </Typography>
            
            <Typography variant="h2" component="div">
                LEAGUE OF LEGENDS
            </Typography>

            <Typography variant="h2"  gutterBottom component="div">
                Trading Cards
            </Typography>
        </div>
    );
}

export default PageHead;