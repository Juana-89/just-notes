import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/ButtonsMain/Button';
import { useAuth } from '../../context/auth';
import { Popup } from '../../components/Popup/Popup';
import styles from './Login.module.css';

export function Login () {
    const navigate = useNavigate();
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');
    const { login, signInGoogle, signInFacebook } = useAuth();
    const [ user, setUser ] = useState({
        email:'',
        password:'',
    });

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });
    
    const onSignInGoogle = async () => {
            await signInGoogle()
            console.log('logueada con google');
    }

    const onSignInFacebook = async () => {
            await signInFacebook()
            console.log('logueada con facebook');
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
           await login(user.email, user.password)
           const userEmail = user.email;
           const capitalizedEmail = capitalizeFirstLetter(userEmail.split('@')[0]);
           setSuccess(capitalizedEmail +  " " + 'ingresaste con éxito')
           setTimeout(() => {
            setSuccess(null);
          }, 3000);
          
           navigate('/notes')
        }
        catch(error){
            switch(error.message){
                case '':
                    setError('No puedes dejar campos vacíos. Ingresa email y contraseña')
                    break;
                case 'Firebase: Error (auth/user-not-found).':
                    setError('Usuario no registrado');
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    setError('Contraseña incorrecta. Intente nuevamente');
                    break;
                case 'Firebase: Error (auth/invalid-email).':
                    setError('Ingresa un correo válido');
                    break;
                case 'Firebase: Error (auth/internal-error).':
                    setError('Ingresa su contraseña');
                    break;
                default:
                    setError(error.message);
            }
        }
    }

    return (
        <>
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.infoEmail} htmlFor="email">
        <label>Correo electrónico</label><input type='email' id='email'
        name='email' onChange={handleChange} className={styles.input}
        autoComplete='off' /><br/>
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
       {error && <Popup content={error}></Popup>}
       {/* {success && <Popup content={success}></Popup>} */}
       </>
    )
}
