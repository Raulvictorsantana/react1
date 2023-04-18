import styles from './NovoProjeto.module.css'
import {useNavigate}   from 'react-router-dom'
import Formulario from '../projeto/Formulario'
//botao nao esta recebendo o valor dinamico


function NovoProjeto(){
   
    const Navigate = useNavigate()

    function CreatePost(project){
        project.cost = 0
        project.services = []
    
        fetch('http://localhost:5000/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            Navigate('/projeto', {state: {  message: 'Projeto criado com sucesso!'}})
          })
      }
    return (
     <div className={styles.NovoProjeto_conatiner}>
                        
    <h1> Novo Projeto</h1>
    <p>Crie seu  projeto para adicionar os serviços </p>
    <Formulario handleSubmit={CreatePost} btnText="ola"/>
    </div>
    ) 
}   
export default NovoProjeto