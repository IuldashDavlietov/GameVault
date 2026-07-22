import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import SearchBar from './components/SearchBar/SearchBar';
import CollectionStats from './components/CollectionStats/CollectionStats';
import GameGrid from './components/GameGrid/GameGrid';
import AddGameForm from './components/AddGameForm/AddGameForm';
import { useState } from 'react';
import {initialGames} from './helper/data';
import { genres } from './helper/data';

function App() {
const title = 'GameVault';

const[games,setGames] = useState(initialGames);

// SearchBar -->
const[searchTerm, setSearchTerm] = useState('');
const filteredGames = games.filter((game)=>game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

// sortBy -->
const handleAddGame=(newGame)=> {
setGames([...games], newGame)
}







  return (
    <div>
      <Header title= {title}/>
      <CollectionStats />
      <AddGameForm genres={genres} handleAddGame={handleAddGame}/>
      <SearchBar  searchTerm ={searchTerm} handleChange={setSearchTerm}/>
      <FilterBar genres={genres} />
      <GameGrid games={filteredGames}/>
    </div>
  )
}

export default App;
