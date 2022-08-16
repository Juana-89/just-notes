import styles from './Login.module.css';

export function Login () {
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <img className={styles.img} src={require('../img/logo.png')}/>
        <article className={styles.article}>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input} placeholder='Ingresa email'/><br/>
        </div>
        <div className='infoPassword'>
        <label>Contraseña</label><input type='text' id='password' className={styles.input} placeholder='Ingresa clave'/><br/>
        </div>
        <button className={styles.btnLogin}>Ingresar</button>
        <div className={styles.infoForgotOrRegisterEmail}>
        ¿Te olvidaste de tu cuenta? <a href='#'> Ingresa aquí</a><br/>
        ¿Aún no te registras? <a href='#'> Házlo aquí</a><br/>
        O conéctate con:<br/>
        <div className={styles.containerLogosGmailFacebook}>
        <img className={styles.img} src={require('../img/gmail.png')}/>
        <img className={styles.img} src={require('../img/facebook.png')}/>
        </div>
        </div>
        </article>
        </div>
        </div>
    )
}