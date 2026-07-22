import { useState } from "react"


export default function AddGameForm({ genres, handleAddGame }) {

  const [formData, setFormData] = useState({
    title: '',
    genre: genres[0] || '',
    coverUrl: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddGame(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <select key={genres}>
        {genres.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <input type="text" onChange={handleChange} />
      <button type="submit">Add game</button>
    </form>

  )
}
