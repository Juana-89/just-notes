import { useNavigate, Link} from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import styles from './Login.module.css';

export function Login () {
    const navigate = useNavigate();
    const register = () => {
        navigate('/register')
    }
    const forgot = () => {
        navigate('/forgot')
    }
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <form className={styles.form}>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input} /><br/>
        </div>
        <div className={styles.infoPassword}>
        <label>Contraseña</label><input type='password' id='password' className={styles.input}/><br/>
        </div>
        <Button />
        <div className={styles.infoForgotOrRegisterEmail}>
        <p className={styles.spanInfo}>
        ¿Te olvidaste de tu cuenta? <Link to='/forgot'><a href='#' className={styles.aForgotRegister}  onclick={forgot()}> Ingresa aquí</a></Link><br/>
        </p>
        <p className={styles.spanInfo}>
        ¿Aún no te registras? <a href='#' className={styles.aForgotRegister} onclick={register()}> Házlo aquí</a><br/>
        </p>
        <p className={styles.spaninfo}>
        O conéctate con:<br/>
        </p>
        <div className={styles.containerLogosGmailFacebook}>
        <img className={styles.img} src={require('../../img/gmail.png')} alt='Ingresa con Gmail'/>
        <img className={styles.img} src={require('../../img/facebook.png')} alt='Ingresa con Facebook'/>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}