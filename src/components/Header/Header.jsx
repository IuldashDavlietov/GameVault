import styles from './Header.module.css';

export default function Header({title}) {
  return (
  <header>
    <h1>{title}</h1>
    <p>Your retro vidto game collection - try search, filters, sort, add a game, or the ❤️ toggle</p>
  </header>
  )
}
