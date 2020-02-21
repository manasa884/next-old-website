import Navbar from '../components/Navbar/Navbar'
import Section from '../components/Section/PageSection'
import styles from './style.scss'

export default function Index() {
  return (
    <div className={styles.root}>
      <Navbar/>
      <Section>
        <div className={styles.mainTextContainer}>
          <p className={styles.helloText}>Hi, I'm Manasa.</p>
          <p className={styles.helloSubText}>I'm a UI/UX enthusiast and Engineer based in Minneapolis.</p>
        </div>
      </Section>
    </div>
  )
}