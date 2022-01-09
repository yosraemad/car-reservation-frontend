import React from "react";
import styles from "../../styles/Input.module.css";

const CustomInput = React.forwardRef((props, ref) => {
  const { id, type } = props;
  return <input className={styles.input} type={type} id={id} ref={ref} />;
});

export default CustomInput;
