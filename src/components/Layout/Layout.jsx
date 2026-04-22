import styles from './Layout.module.css'

function Layout({children}) {
return (
    <div className={styles.layout}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
}
export default Layout