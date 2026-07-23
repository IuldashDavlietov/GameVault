import styles from './CollectionStats.module.css';

export default function CollectionStats({totalGames, favoriteGames}) {
  return (
    <div>
      <p>{totalGames}</p>
      <p> {favoriteGames}</p>
    </div>
  )
}
