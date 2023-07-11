import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <SignInPage />
      <SignUpPage />
      <HomePage />
    </>
  );
}

export default App;
