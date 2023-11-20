import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import styles from './LogOut.module.css';

export function ButtonLogOut({text}) {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const closeSession = () => { 
        console.log(typeof logOut);
        logOut()
        navigate('/');
    }
    
    return (
        <button className={styles.btn}
        onClick={closeSession}>{text}</button>
    )
}