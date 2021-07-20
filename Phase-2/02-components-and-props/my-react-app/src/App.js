import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar 
        isLoggedIn
        someProp = {someProp}
      />
      <Header />
      
    </div>
  );
}

export default App;
