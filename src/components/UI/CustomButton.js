import Button from "@material-ui/core/Button";
import React from "react";
import styles from "../../styles/button.module.css";

const CustomButton = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <Button
     selected 
     size="large"
     disableElevation
     variant="contained" 
     color="primary" 
     ref={ref}
     className={styles.Button}>

     {children}
    </Button>
  );
});

export default CustomButton;
