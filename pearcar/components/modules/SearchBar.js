import styles from '../../styles/SearchBar.module.scss'

function SearchBar() {
  return (
    <div className={styles.container}>
        <div>
            <input placeholder='Inter min-Price'/>
            <input placeholder='Inter Max-Price'/>
        </div>
        <button>Search</button>
    </div>
  )
}

export default SearchBar
