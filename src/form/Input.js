 import styles from'./Input.module.css'

 function Input({type,text,name,placeholder,handleoncharge,value}){
  return(
  <div className={styles.form_control}>
    <label htmlfor={name}>{text};</label>
    <input type={type} name={name} id={name}placeholder={placeholder}
    onChange={handleoncharge}
    value={value} />
   </div>
   )}
 export default Input 