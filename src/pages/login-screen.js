import CustomButton from "../components/UI/CustomButton";
import CustomInput from "../components/UI/CustomInput";
import styles from "../styles/form.module.css";

const LoginScreen = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
      />
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
      />
      <CustomButton>Log in</CustomButton>
    </form>
  );
};

export default LoginScreen;
