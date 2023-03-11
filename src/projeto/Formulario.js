import styles from './Formulario.module.css'

function Formulario (){
    return(
    <form className={styles.Form}>
      <div> 
         <input type="text" placeholder="Insira o nome do projeto">
         </input>
      </div>
      
      <div>
        <input type="number" placeholder=" Insira o orçamento total"></input>
      </div>

      <div>
         <select name="Ctegoria_id">
            <option disabled selected> selecione a categoria</option>
         </select>
       </div>
   
        <div>
         <input type="submit" value="Criar projeto"/>
        </div>
      
    </form>
    )
        
    
}
export default Formulario