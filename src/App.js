import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";

import Engine from "./Pages/Components/HomePage/Category/Engine/Engine";
import Oil from "./Pages/Components/HomePage/Category/Oil/Oil";
import Tyers from "./Pages/Components/HomePage/Category/Tyers/Tyers";
import DashBoard from "./Pages/Components/HomePage/DashBoard/DashBoard";
import MyProfile from "./Pages/Components/HomePage/DashBoard/Profile/MyProfile";
import MyOrders from "./Pages/Components/HomePage/DashBoard/MyOrders/MyOrders";
import AddReview from "./Pages/Components/HomePage/DashBoard/AddReview/AddReview";
import Footer from "./Pages/Components/HomePage/Footer/Footer";
import Home from "./Pages/Components/HomePage/Home";
import Navbar from "./Pages/Components/HomePage/Navbar/Navbar";
import PartsDetails from "./Pages/Components/HomePage/Parts/PartsDetails/PartsDetails";
import TotalItems from "./Pages/Components/HomePage/Totalitems/TotalItems";
import { PublicRoute } from "./Pages/Routes/PublicRoutes/PublicRoutes";
import Notfound from "./Pages/Shared/Notfound";
import ManageAllOrder from "./Pages/Components/HomePage/DashBoard/ManageAllOrder/ManageAllOrder";
import AddProduct from "./Pages/Components/HomePage/DashBoard/AddProduct/AddProduct";
import MakeAdmin from "./Pages/Components/HomePage/DashBoard/MakeAdmin/MakeAdmin";
import EditProfile from "./Pages/Components/HomePage/DashBoard/Profile/ProfileEdit/EditProfile";
import ManageProducts from "./Pages/Components/HomePage/DashBoard/ManageProducts/ManageProducts";
import Portfolio from "./Pages/MyPortFolio/Portfolio";
import Blogs from "./Pages/Shared/Blogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedAuth from "./Pages/Authentication/ProtectedAuth";
import Payment from "./Pages/Shared/Payment/Payment";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* {PublicRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} Component={<Component/>}></Route>
        ))} */}
        {<Route path="/" element={<Home />} />}
        <Route
          path="/partsdetails/:Id"
          element={
            <ProtectedAuth>
              <PartsDetails />
            </ProtectedAuth>
          }
        ></Route>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Home />}>
          <Route index element={<Engine />} />
          <Route path="/tyers" element={<Tyers />} />
          <Route path="engine" element={<Engine />} />
          <Route path="/oil" element={<Oil />} />
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route path="myorders" element={<MyOrders />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageproducts" element={<ManageProducts />} />
          <Route path="makeadmin" element={<MakeAdmin />}></Route>
          <Route path="manageallorder" element={<ManageAllOrder />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="payment" element={<Payment/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
