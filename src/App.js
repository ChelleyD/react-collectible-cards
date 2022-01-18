import './App.css';
import PageHead from './components/PageHead'


function App() {
  const char_info = [
    {
      name: "Vi",
      avatar: "Zaun",
      image: "",
      species: "Human",
      year_of_origin: "970 AN - 973 AN",
      weopans: ["Atlas Gauntlets", "Blast Shield"]
    }
  ]

  return (
    <div className='App'>
      <PageHead />
    </div>
  );
}

export default App;
