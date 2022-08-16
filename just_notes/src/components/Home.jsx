import styles from './Home.module.css';

export function Home () {
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <img className={styles.img} src={require('../img/logo.png')}/>
        <article className={styles.article}>
        ¿Olvidaste alguna fecha importante? <br/>
        No te preocupes que esta aplicación te ayudará <br/>
        a guardar tus eventos o citas más importantes. <br/>
        <button className={styles.btnEnter}>Ingresa a tu cuenta</button>
        </article>
        </div>
        </div>
    )
    }