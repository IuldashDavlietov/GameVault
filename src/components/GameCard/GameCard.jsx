import styles from './GameCard.module.css';

export default function GameCard({id, title, genre, rating, cover }) {
  return (
    <div>
      <img src={cover} alt={title} />
      <div>
        <p>{genre}</p>
        <h3>{title}</h3>
        <span>{rating}</span>
      </div>
    </div>
  )
}
