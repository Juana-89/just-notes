import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './Home.module.css';

export function Home () {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <section className={styles.container}>
        <article className={styles.containerElements}>
        <img className={styles.img} src={require('../../img/logo.png')}/> <br />
        ¿Olvidaste alguna fecha importante? <br/>
        No te preocupes que esta aplicación <br /> te ayudará a guardar tus eventos o <br /> citas más importantes. <br/>
        <Button text="Ingresa a tu cuenta" click={login}/>
        {/* <button className={styles.btnEnter}  >Ingresa a tu cuenta</button> */}
        </article>
        </section>
    )
}