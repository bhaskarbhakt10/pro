import { BrowserRouter as Routerr, Routes, Route } from "react-router-dom";
import Login from "../pages/login-signup/Login";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";
import Account from "../pages/account/Account";
import Profile from "../pages/profile/Profile";

const Router = () => {
  return (
    <>
      <Routerr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="user" element={<User />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Routerr>
    </>
  );
};

export default Router;
