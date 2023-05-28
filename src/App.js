import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'
import 'react-toastify/dist/ReactToastify.css'
import Login from './router/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Login />
    </div>
  );
}

export default App;