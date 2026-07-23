import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import SearchBar from './components/SearchBar/SearchBar';
import CollectionStats from './components/CollectionStats/CollectionStats';
import GameGrid from './components/GameGrid/GameGrid';
import AddGameForm from './components/AddGameForm/AddGameForm';
import { useState } from 'react';
import { initialGames } from './helper/data';
import { genres } from './helper/data';

function App() {
  const title = 'GameVault';

  const [games, setGames] = useState(initialGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  // SearchBar & Filterbar-->
  const filteredGames =
    games
      .filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
        return (
          matchesSearch &&
          matchesGenre
        );
      })

      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        } else {
          return a.title.localeCompare(b.title)
        }
      });

  // Add game -->
  const handleAddGame = (newGame) => {
    setGames([...games, newGame])
  }

  const toggleFavorite = (id) => {
    setGames(games.map((game) => game.id === id ? { ...game, isFavorite: !game.isFavorite } : game));
  };

  const totalGames = filteredGames.length;
  const favoriteGames = games.filter((game) => game.isFavorite).length;
  return (
    <div>
      <Header title={title} />
      <CollectionStats
        totalGames={totalGames}
        favoriteGames={favoriteGames} />
      <AddGameForm
        genres={genres}
        handleAddGame={handleAddGame} />
      <SearchBar
        searchTerm={searchTerm}
        handleChange={setSearchTerm} />
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectedGenre={setSelectedGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <GameGrid games={filteredGames}
        onToggleFavorite={toggleFavorite} />
    </div>
  )
}


export default App;
