import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Footer from './Pages/Components/HomePage/Footer/Footer';
import Home from './Pages/Components/HomePage/Home';
import Navbar from './Pages/Components/HomePage/Navbar/Navbar';
import { PublicRoute } from './Pages/Routes/PublicRoutes/PublicRoutes';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* {PublicRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} Component={<Component/>}></Route>
        ))} */}
        {<Route path='/' element={<Home/>}/>}
        <Route path='login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
