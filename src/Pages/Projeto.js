import styles from './projeto.module.css'
import Mensagem from '../layout/Mensagem'
function Projeto(){
    return(
       <div className={styles.projeto_container}>
        <h1> Meus projetos</h1> 
        <Mensagem msg= "Sem projetos no momento" />
       </div>
    )
}  
 export default Projeto