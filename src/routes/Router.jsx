import { BrowserRouter as Routerr, Routes, Route } from "react-router-dom";
import Login from "../pages/login-signup/Login";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";
import Account from "../pages/account/Account";
import Profile from "../pages/profile/Profile";

import PrivateRoutes from "./PrivateRoutes";
import Card from "../pages/card/Card";
import CardView from "../pages/cardview/CardView";
import ListCards from "../pages/list-cards/ListCards";

const Router = () => {
  return (
    <Routerr>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:phonenumber" element={<CardView/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/user">
            <Route index element={<User />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="profile" element={<Profile />} />
            <Route path="card" element={<Card />} />
            <Route path="list-card" element={<ListCards  />} />
          </Route>
        </Route>
      </Routes>
    </Routerr>
  );
};

export default Router;
