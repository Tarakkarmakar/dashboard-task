import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import { Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
  <Routes>

    <Route path="/" element={<Dashboard />}/>
  </Routes>


  );
}

export default App;
