import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import styles from './Register.module.css';

export function Register () {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <form className={styles.form}>
        <div className={styles.infoUser}>
        <label>Usuario</label><input type='text' id='user' className={styles.input} /><br/>
        </div>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input} /><br/>
        </div>
        <div className={styles.infoPassword}>
        <label>Contraseña</label><input type='password' id='password' className={styles.input}/><br/>
        </div>
        <div className={styles.repeatPassword}>
        <label>Confirma contraseña</label><input type='password' id='passwordr' className={styles.input}/><br/>
        </div>
        <Button />
        </form>
        <p className={styles.pClick}> <a href='#' className={styles.aLogin} onclick={login()}>Clickea aquí para regresar a loguearte</a></p>
        </div>
        </div>
    )
}