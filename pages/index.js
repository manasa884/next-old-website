import Navbar from '../components/Navbar/Navbar'
import styles from './style.scss'

export default function Index() {
  return (
    <div className={styles.root}>
      <Navbar/>
      <div className={styles.mainTextContainer}>
        <p className={styles.helloText}>Hi, I'm Manasa.</p>
        <p className={styles.helloSubText}>I'm a UI/UX enthusiast and Engineer based in Minneapolis.</p>
      </div>
    </div>
  )
}