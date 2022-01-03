import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login-screen";
import SignUpScreen from "./pages/sign-up-screen";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="sign-up" element={<SignUpScreen></SignUpScreen>} />
      </Routes>
    </>
  );
}

export default App;
