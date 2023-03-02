import style from './linkbutton.module.css'
import { Link } from 'react-router-dom';
function linkbutton({to,text}){
    return(
       <Link className={style.btn} to={to}>
        {text}
       </Link>
    )

}
export default linkbutton