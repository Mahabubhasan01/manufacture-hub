import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Components/HomePage/Footer/Footer';
import Navbar from './Pages/Components/HomePage/Navbar/Navbar';
import { PublicRoute } from './Pages/Routes/PublicRoutes/PublicRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {PublicRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} component={<Component></Component>}></Route>
        ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
