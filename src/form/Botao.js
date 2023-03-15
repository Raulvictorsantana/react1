 import styles from './botao.module.css'
function Botao({text}){
    return(
        <div>
            <button className={styles.btn}> {Text} </button>
        </div>
    )
}
export default Botao