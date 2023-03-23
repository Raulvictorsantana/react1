import styles from './NovoProjeto.module.css'
import {useNavigate}   from 'react-router-dom'
import Formulario from '../projeto/Formulario'
//botao nao esta recebendo o valor dinamico


function NovoProjeto(){
   
    const Navigate = useNavigate()

    function createPost(project){
        project.cost=0
        project.services=[]
        
        fetch('http://localhost:5000/project',{
         method:'POST',
         headers: {
            'Content-type':'application/json',
            },
            body: JSON.stringfy(project),

        })

        .then((resp)=>resp.json())
        .then((data)=>{ 
            console.log(data)
            Navigate('projects',{messsage:'projeto criado com sucesso'})
        })
        .catch((err)=> console.log(err))
        

    }
    return (
     <div className={styles.NovoProjeto_conatiner}>
                        
    <h1> Nova Pagina</h1>
    <p>Crie seu  projeto para adicionar os serviços </p>
    <Formulario handleSubmit={createPost} btnText="ola"/>
    </div>
    ) 
}   
export default NovoProjeto