import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { useAuth } from '../../context/auth';
import styles from './Login.module.css';

export function Login () {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login, signInGoogle, signInFacebook } = useAuth();
    const [user, setUser] = useState({
        email:'',
        password:'',
    });

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });
    
    const onSignInGoogle = async () => {
            await signInGoogle()
            console.log('logueada con google')
    };

    const onSignInFacebook = async () => {
            await signInFacebook()
            console.log('logueada con facebook')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
           await login(user.email, user.password)
           alert('ingresaste con éxito')
        }
        catch(error){
            switch(error.message){
                case '':
                    alert('No puedes dejar campos vacíos. Ingresa email y contraseña')
                    break;
                    case 'auth/user-not-found':
                        setError('Usuario no registrado');
                        break;
                    case 'auth/wrong-password':
                        setError('Contraseña incorrecta. Intente nuevamente');
                        break;
                    case 'auth/invalid-email':
                        setError('Ingresa un correo válido');
                        break;
                    case 'auth/internal-error':
                        setError('Ingresa su contraseña');
                        break;
                    default:
                        setError(error.message);
            }
        }
    }

    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.infoEmail} htmlFor="email">
        <label>Correo electrónico</label><input type='email' id='email'
        name='email' onChange={handleChange} className={styles.input} /><br/>
        </div>
        <div className={styles.infoPassword} htmlFor="password">
        <label>Contraseña</label><input type='password' id='password' 
         name='password' onChange={handleChange} className={styles.input}/><br/>
        </div>
        <Button text="Ingresar" click={handleSubmit}/>
        <div className={styles.infoForgotOrRegisterEmail}>
        <p className={styles.spanInfo}>
        ¿Te olvidaste de tu cuenta? <a href='/forgot' className={styles.aForgotRegister} > Ingresa aquí</a><br/>
        </p>
        <p className={styles.spanInfo}>
        ¿Aún no te registras? <a href='/register' className={styles.aForgotRegister}> Házlo aquí</a><br/>
        </p>
        <p className={styles.spaninfo}>
        O conéctate con:<br/>
        </p>
        <div className={styles.containerLogosGmailFacebook}>
        <img className={styles.img} src={require('../../img/gmail.png')} alt='Ingresa con Gmail' onClick={onSignInGoogle}/>
        <img className={styles.img} src={require('../../img/facebook.png')} alt='Ingresa con Facebook' onClick={onSignInFacebook}/>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}
