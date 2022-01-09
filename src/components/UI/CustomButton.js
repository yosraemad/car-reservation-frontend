import Button from "@material-ui/core/Button";
import React from "react";
import styles from "../../styles/button.module.css";

const CustomButton = React.forwardRef((props, ref) => {
  return (
    <Button
      size="large"
      disableElevation
      variant="contained"
      color="primary"
      ref={ref}
      className={styles.Button}
      onClick={props.onClicked}
    >
      {props.children}
    </Button>
  );
});

export default CustomButton;
