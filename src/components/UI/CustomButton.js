import Button from "@material-ui/core/Button";
import React from "react";
import styles from "../../styles/button.module.css";

const CustomButton = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <Button variant="contained" ref={ref} className={styles.CustomButton}>
      {children}
    </Button>
  );
});

export default CustomButton;
