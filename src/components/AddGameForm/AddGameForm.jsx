import styles from './AddGameForm.module.css';

export default function AddGameForm({ genres }) {
  return (

    <form action="">
      <input type="text" />
      <select>
        {genres.map((genre) => (
      <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <input type="text" />
      <button>Add game</button>
    </form>


  )
}
