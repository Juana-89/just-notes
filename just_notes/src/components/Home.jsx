import styles from './Home.module.css';

export function Home () {
    return (
        <section className={styles.container}>
        <article className={styles.containerElements}>
        <img className={styles.img} src={require('../img/logo.png')}/> <br />
        ¿Olvidaste alguna fecha importante? <br/>
        No te preocupes que esta aplicación <br /> te ayudará a guardar tus eventos o <br /> citas más importantes. <br/>
        <button className={styles.btnEnter}>Ingresa a tu cuenta</button>

        </article>
        </section>
    )
}