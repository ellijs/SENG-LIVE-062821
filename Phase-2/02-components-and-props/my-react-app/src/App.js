import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar"
import Header from "./Components/Header"

function App() {
  const someProp = "Hi"
  return (
    <div className="App">
      <NavBar 
        isLoggedIn = {false}
        someProp = {someProp}
      />
      <Header />
      
    </div>
  );
}

export default App;
