import styles from './Formulario.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Botao from '../form/Botao'

function Formulario (btnText){
    return(
    <form className={styles.Form}>
      <Input
      type="text"
      text ="Nome do projeto"
      name ="name"
      placeholder="Insira o nome do projeto"
      />
      
      
      <Input
      type="number"
      text ="Orçamento do projeto"
      name ="budget"
      placeholder="Insira o orçamento total"
      />

     <Select name="categoria_id" text="selecione a categoria"/>
   
     <Botao text={btnText}/>
    </form>
    //botao nao esta recebendo o valor dinamico
    )
        
    
}
export default Formulario