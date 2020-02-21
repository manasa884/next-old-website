import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.root}>
      <Link href="/">
        <a className={styles.brand}>Manasa Tipparam</a>
      </Link>
      <div className={styles.flexGrow}/>
      <Link href="/photography">
        <a className={styles.menuItem}>Photography</a>
      </Link>
      <Link href="/design">
        <a className={styles.menuItem}>Design</a>
      </Link>
      <Link href="/about">
        <a className={styles.menuItem}>About</a>
      </Link>
    </div>
  )
}

export default Navbar