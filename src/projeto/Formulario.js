import {useEffect, useState} from 'react'
import styles from './Formulario.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Botao from '../form/Botao'


function Formulario (handlesumit,btnText,projectData){
  const[categories,setCategories]=useState([])
  const[ project,setProject]=useState(projectData||{})
  useEffect(()=>{  
      fetch('http://localhost:5000/categories',{
      method: "GET",
      headers: {
      'content-type':'aplication/json',
      },
    })
    .then((resp)=>resp.json())
    .then((data)=>{
      setCategories(data)
    })
    .catch ((err)=>console.log(err))

  },[])
  const submit = (e)=>{
    e.preventDefault()
    handlesumit(project)
  }
  
  function handlechange(e){
    setProject({...project,[e.target.name]:e.target.value})
 console.log(project)
  }
    return(
    <form onSubmit={submit} className={styles.Form}>
      <Input
      type="text"
      text ="Nome do projeto"
      name ="name"
      placeholder="Insira o nome do projeto"
      handleOnchange ={handlechange}
      />
      
      
      <Input
      type="number"
      text ="Orçamento do projeto"
      name ="budget"
      placeholder="Insira o orçamento total"
      handleOnchange ={handlechange}
      />

     <Select name="categoria_id"
      text="selecione a categoria"
      options={categories}
     />
   
     <Botao text={btnText}/>
    </form>
    //botao nao esta recebendo o valor dinamico
    )
        
    
}
export default Formulario