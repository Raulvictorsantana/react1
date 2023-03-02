import{Link}from 'react-router-dom'
import styles from './Navbar.module.css'
//import Container from './Container'
import Logo from'../img/costs_logo.png'
 function Navbar(){
    return(

<nav className={styles.navbar}>
       
        <Link to ="/"> 
         <img src ={Logo} alt="cost"/> 
        </Link>
   
    <ul className={styles.list}>
        
        <li className={styles.item}>
             <Link to="/">Home</Link>
        </li>

        <li className={styles.item}>
            <Link to="/Empresa">Empresa</Link>
        </li>

        <li className={styles.item}>
             <Link to="/Projeto">Projeto</Link>
        </li>
        
        <li className={styles.item}>
           <Link to="/Contato">Contato</Link>
        </li>

       
    </ul>
 
</nav>
    )

}
export default Navbar