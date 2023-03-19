import styles from'./select.module.css'
function Select({text,name,options,handleoncharge,value}) {
    return(
    <div className={styles.form_control}>
      <label htmlfor={name}>{text};</label>
      <select name={name} id={name}>
      <option>selecione uma opção</option>
    
     {options.map((option)=> {
     return<option value={ option.id} key={option.id}>{option.name} </option>;
      })}
    </select>
     </div>
     )}
     export default Select