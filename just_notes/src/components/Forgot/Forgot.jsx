import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { useAuth } from '../../context/auth';
import styles from './Forgot.module.css';

export function Forgot () {
    const navigate = useNavigate();
    const emailRef = useRef();
    const [error, setError] = useState('');
    const { forgot } = useAuth();

    const login = () => {
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
           await forgot(emailRef.current.value)
           alert('Correo electrónico enviado, veríficalo')
        }
        catch(err){
           alert('Correo electrónico no registrado', error)
        }
    }
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <p className={styles.title}>Ingresa el correo electrónico registrado para reestablecer contraseña</p>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.infoEmail} htmlFor="email">
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input}
         name='email' ref={emailRef} /><br/>
        </div>
        <Button text="Enviar" click={handleSubmit}/>
        </form>
        <p className={styles.pClick}> <a href='#' className={styles.aLogin} onClick={login()}>Clickea aquí para regresar a loguearte</a></p>
        </div>
        </div>
    )
}