 import { useEffect, useState } from 'react'

 import styles from './mensagem.module.css'
 
 function Mensagem({type,msg}){
   
   const [visible, setvisible]=useState(false)
   
   useEffect (()=>{
      if(!msg){
         setvisible(false)
         return
      }
      setvisible(true)

   },[msg])
    
   return(  
      <> {visible&&(
         
          <div className={`${styles.mensagem} ${styles[type]}`}>{msg}</div>
        
      
       )}    
    </>
    )


 }
 export default Mensagem