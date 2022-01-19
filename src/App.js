import './App.css';
import PageHead from './components/PageHead'
import CardBody from './components/CardBody';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <PageHead />

      <Grid container className='cd'>
        <CardBody />
      </Grid>
    </div>
  );
}

export default App;
