import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/log-in/login';
import Signup from './pages/sign-up/Signup';
import Header from './components/header/Header';
import { NavigationPage } from './components/navigation/NavigationPage';
import AllJobs from './pages/alljobs/AllJobs';
import AdminDashboard from './pages/admin/AdminDashboard';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <NavigationPage/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/alljobs" element={<AllJobs/>} />       
          <Route path="/admin" element={<AdminDashboard/>} /> 


        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
