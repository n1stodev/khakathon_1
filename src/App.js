import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner'
import 'react-toastify/dist/ReactToastify.css'
import Login from './router/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
      <Login />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;