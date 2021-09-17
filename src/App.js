import React, {useState, useEffect} from 'react';
import './App.css';
import AstronomyContainer from './components/AstronomyContainer';

function App() {

  const [astronomyData, setAstronomyData] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?count=10&api_key=sZRkR3ohLl9HFh3RqMCLquWm9tkhkWWd88yTNEv2')
    .then(resp => resp.json())
    .then(data => {
      setAstronomyData(data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Welcome To Spacetagram</h1>
      {astronomyData.length > 0 ? <AstronomyContainer astronomyData={astronomyData}/> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
