import React from "react";
import styles from "../../styles/Input.module.css"



const CustomInput = (props) => {
  const { labelText, id, type, handleChange } = props;
  return (
    
    <input className={styles.input} type={type} id={id}/>
    
  );
};

export default CustomInput;
