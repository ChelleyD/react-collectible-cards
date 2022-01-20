import './App.css';
import PageHead from './components/PageHead'
import CardBody from './components/CardBody';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className='App'>
      <PageHead />

      <Grid container className='cd'>
        <CardBody />
      </Grid>

      <Typography variant="h5" style={{color:"#CEC7C0"}}>
        Swipe to see our card collection!
      </Typography>
    </div>
  );
}

export default App;
