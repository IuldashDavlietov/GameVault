import styles from './FilterBar.module.css'

export default function FilterBar({
  genres,
  selectedGenre,
  onSelectedGenre,
  sortBy,
  onSortChange
}) {
  return (
    <div>
      {genres.map((genre) => (
        <button key={genre}
          className={styles.filtrBtn}
          style={{ backgroundColor: genre === selectedGenre ? '#646cff' : 'transparent' }}
          onClick={() => onSelectedGenre(genre)}>{genre}</button>
      ))}
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  )
}
