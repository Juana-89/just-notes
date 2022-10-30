import styles from './SaveDelete.module.css';

function ButtonsSaveAndDelete ({text, classBtn, click}) {
    return (
        <button className={classBtn ? 'btnSave' : 'btnDelete'}
        onClick={click}>{text}</button>
    )
}

export default ButtonsSaveAndDelete;