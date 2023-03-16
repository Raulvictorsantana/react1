 import styles from './botao.module.css'
function Botao(){
    //botao nao esta recebendo o valor dinamico
    return(
        <div>
            <button className={styles.btn}> Criar projeto </button>
          
        </div>
    )
}
export default Botao