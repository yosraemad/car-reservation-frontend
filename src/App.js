import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login-screen";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
