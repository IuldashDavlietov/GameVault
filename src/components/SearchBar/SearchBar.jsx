import styles from './SearchBar.module.css';

export default function SearchBar({ searchTerm, handleChange }) {
    return (
        <form>
            <input type="text"
                placeholder='Search games'
                value={searchTerm}
                onChange={(e) => handleChange(e.target.value)} />
        </form>
    )
}
