import { useAuth } from '../../context/auth';
import styles from './LogOut.module.css';
export function ButtonLogOut({text, click}) {
    const { logOut } = useAuth();
    return (
        <>
        <button className={styles.btn}
        onClick={logOut}>{text}</button>
        </>
    )
}