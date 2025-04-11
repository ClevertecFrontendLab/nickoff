import styles from './Main.module.css';

export const Main = () => (
    <section className={styles.main}>
        <div className={styles.mainHeader}>
            <h1>Приятного аппетита!</h1>
        </div>
        <div className={styles.mainContent}></div>
    </section>
);
