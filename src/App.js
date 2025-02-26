import logo from './logo.svg';
import './App.css';
import './Styles/main.scss'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
     
        <Header />
        <HomePage />
        <Footer />
    
    </div>
  );
}

export default App;
