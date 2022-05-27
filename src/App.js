import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";

import Engine from "./Pages/Components/HomePage/Category/Engine/Engine";
import Oil from "./Pages/Components/HomePage/Category/Oil/Oil";
import Tyers from "./Pages/Components/HomePage/Category/Tyers/Tyers";
import DashBoard from "./Pages/Components/HomePage/DashBoard/DashBoard";
import MyProfile from './Pages/Components/HomePage/DashBoard/Profile/MyProfile'
import MyOrders from './Pages/Components/HomePage/DashBoard/MyOrders/MyOrders'
import AddReview from './Pages/Components/HomePage/DashBoard/AddReview/AddReview'
import Footer from "./Pages/Components/HomePage/Footer/Footer";
import Home from "./Pages/Components/HomePage/Home";
import Navbar from "./Pages/Components/HomePage/Navbar/Navbar";
import PartsDetails from "./Pages/Components/HomePage/Parts/PartsDetails/PartsDetails";
import TotalItems from "./Pages/Components/HomePage/Totalitems/TotalItems";
import { PublicRoute } from "./Pages/Routes/PublicRoutes/PublicRoutes";
import Notfound from "./Pages/Shared/Notfound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* {PublicRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} Component={<Component/>}></Route>
        ))} */}
        {<Route path="/" element={<Home />} />}
        <Route path="/partsdetails/:Id" element={<PartsDetails/>}></Route>
        <Route path="login" element={<Login />} />

        {/* <Route path="/" element={<TotalItems />}>
          <Route index element={<Oil />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/tyers" element={<Tyers />} />
          <Route path="engine" element={<Engine />} />
        </Route> */}
        <Route path="/dashboard"element={<DashBoard/>} >
          <Route index element={<MyProfile/>}></Route>
          <Route path="myorders" element={<MyOrders/>}></Route>
          <Route path="addreview" element={<AddReview/>}></Route>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
