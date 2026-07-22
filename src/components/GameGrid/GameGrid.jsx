import styles from './GameGrid.module.css';
import GameCard from '../GameCard/GameCard';

export default function GameGrid({games}) {
  return (
    <div className={styles.gameContainer}>
      {games.map((game)=>(
      <GameCard key={game.id}
       {...game}/>
      ))}
    </div>
  )
}
