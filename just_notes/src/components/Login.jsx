import './Login.css';

export function Login () {
    return (
        <div className='container'>
        <div className='containerElements'>
        <img className='img' src={require('../img/logo.png')}/>
        <article className='article'>
        <div className='infoEmail'>
        <label>Correo electrónico</label><input type='text' id='email' className='input' placeholder='Ingresa email'/><br/>
        </div>
        <div className='infoPassword'>
        <label>Contraseña</label><input type='text' id='password' className='input' placeholder='Ingresa clave'/><br/>
        </div>
        <button className='btnLogin'>Ingresar</button>
        <div className='infoForgotOrRegisterEmail'>
        ¿Te olvidaste de tu cuenta? Ingresa <a href='#'>aquí</a><br/>
        ¿Aún no te registras? Házlo <a href='#'>aquí</a><br/>
        O conéctate con:<br/>
        <div className='containerLogosGmailFacebook'>
        <img className='img' src={require('../img/gmail.png')}/>
        <img className='img' src={require('../img/facebook.png')}/>
        </div>
        </div>
        </article>
        </div>
        </div>
    )
}