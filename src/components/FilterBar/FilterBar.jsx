import styles from './FilterBar.module.css'

export default function FilterBar({genres}) {
  return (
<div>
    {genres.map((genre)=>(
        <button key={genre}>{genre}</button>
    ))}
</div>
  )
}
