import styles from './Header.module.css';

export function Header () {
    return (
<img className={styles.img} src={require('../../img/logo.png')}/>
    )
}