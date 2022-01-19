import './App.css';
import PageHead from './components/PageHead'
import CardBody from './components/CardBody';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className='App'>
      <PageHead />

      <div className='cd'>
        <CardBody />
      </div>
    </div>
  );
}

export default App;
