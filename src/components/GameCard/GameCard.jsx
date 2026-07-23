import styles from './GameCard.module.css';

export default function GameCard({id, title, genre, rating, cover,onToggleFavorite,isFavorite }) {
  return (
    <div>
      <img src={cover} alt={title} />
      <div>
        <p>{genre}</p>
        <h3>{title}</h3>
        <span>{rating}</span>
        <button onClick={()=>onToggleFavorite(id)}> {isFavorite ? '❤️' : '🤍'} </button>
      </div>
    </div>
  )
}
