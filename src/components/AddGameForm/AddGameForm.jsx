import { useState } from "react"


export default function AddGameForm({ genres, handleAddGame }) {

  const [formData, setFormData] = useState({
    title: '',
    genre: genres[0] || '',
    cover: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      id: Date.now(),
      ...formData
    }
    handleAddGame(newGame);

    setFormData({
      title: '',
      genre: genres[0] || '',
      cover: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name='title' value={formData.title} />
      <select name="genre" value={formData.genre} onChange={handleChange}>
        {genres.map((genre) => (
          <option value={genre} key={genre}>{genre}</option>
        ))}
      </select>
      <input type="text" placeholder="Cover" onChange={handleChange} name='cover' value={formData.cover} />
      <button type="submit">Add game</button>
    </form>

  )
}
