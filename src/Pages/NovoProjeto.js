import styles from './NovoProjeto.module.css'
import Formulario from '../projeto/Formulario'

function NovoProjeto(){
    return(
     <div className={styles.NovoProjeto_conatiner}>
                        
    <h1> Nova Pagina</h1>
    <p>Crie seu  projeto para adicionar os serviços </p>
    <Formulario/>
    </div>
    ) 
}
export default NovoProjeto