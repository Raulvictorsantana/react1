import styles from './home.module.css' 
import Linkbutton from '../layout/Linkbutton'
import porquinho from'../img/porquinho.png'

function Home(){
    return ( 
        <section className={styles.home_container}>
         <h1> Seja Bem vindo ao <span>costs</span>
        </h1>
         <p>Começe a gerenciar os seus projetos agora mesmo</p>
         <Linkbutton to="/NovoProjeto" text ="criar projeto"/>
        <img src={porquinho} alt= "porco"/>
        </section>
    )
}
export default Home