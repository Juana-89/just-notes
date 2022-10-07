import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import styles from './Forgot.module.css';

export function Forgot () {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <p className={styles.title}>Ingresa el correo electrónico registrado para reestablecer contraseña</p>
        <form className={styles.form}>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input} /><br/>
        </div>
        <Button />
        </form>
        <p className={styles.pClick}> <a href='#' className={styles.aLogin} onclick={login()}>Clickea aquí para regresar a loguearte</a></p>
        </div>
        </div>
    )
}