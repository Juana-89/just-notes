import styles from './SaveDelete.module.css';

function ButtonsSaveAndDelete ({text, classBtn, click}) {
    return (
        <button id={styles.btns} className={classBtn ? 'btnSave' : 'btnDelete'}
        onClick={click}>{text}</button>
    )
}

export default ButtonsSaveAndDelete;