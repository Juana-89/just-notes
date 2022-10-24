import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { useAuth } from '../../context/auth';
import styles from './Register.module.css';

export function Register () {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [user, setUser] = useState({
  
        email:'',
        password:'',
    });
    const login = () => {
        navigate('/login')
    }
    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
            e.preventDefault();
            setError('')
            try{
               await register( user.email, user.password)
               alert('te registraste con éxito')
            }
            catch(error){
                switch(error.message){
                    case '':
                        setError('No puedes dejar campos vacíos. Ingresa un nombre de usuario, email y contraseña')
                        break;
                    case 'auth/email-already-in-use':
                        setError('El correo ingresado ya está en uso');
                        break;
                    case 'auth/weak-password': 
                        setError('La contraseña ingresada debe de tener más de 6 caracteres entre números y letras');
                        break;
                    case 'auth/invalid-email':
                        setError('Ingresa un correo válido');
                        break;
                    default:
                        setError(error.message);
                }
            }
        }
   //este componente aun falta por terminar
        // useEffect(() => {
        //     if (user) {
        //       navigate('/home');
        //     }
        // },[user, navigate])
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <Header />
        <form className={styles.form}>
        <div className={styles.infoUser}>
        <label>Usuario</label><input type='text'  
        className={styles.input} onChange={handleChange}  /><br/>
        </div>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='email' name='email'
        className={styles.input} onChange={handleChange}  /><br/>
        </div>
        <div className={styles.infoPassword}>
        <label>Contraseña</label><input type='password' name='password'
        className={styles.input} onChange={handleChange} /><br/>
        </div>
        <div className={styles.repeatPassword}>
        <label>Confirma contraseña</label><input type='password' name='passwordr'
         className={styles.input} /><br/>
        </div>
        <Button text="Registrarse" click={handleSubmit}/>
        </form>
        <p className={styles.pClick}> <a href='#' className={styles.aLogin} onClick={login}>Clickea aquí para regresar a loguearte</a></p>
        </div>
        </div>
    )
}
