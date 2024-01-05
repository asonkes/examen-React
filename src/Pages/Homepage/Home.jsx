import styles from './Home.module.scss';

export default function Presentation() {
  return (
    <div className={styles.home}>
      <div className={styles.homePicture}></div>
      <div className="container">
        <h1>Bienvenu chez nous !!!</h1>
      </div>
    </div>
  );
}

