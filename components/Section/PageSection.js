import styles from './PageSection.module.scss'

const PageSection = props => {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  )
}

export default PageSection