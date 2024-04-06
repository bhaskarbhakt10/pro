
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/login/loginSlice";

import { Link, Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {

  const dispatch = useDispatch();
  const isCurrentlyLoggedIn = useSelector((state)=> state.login.is_logged);
  const Navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Log me out");
    console.log(isCurrentlyLoggedIn);
    if(isCurrentlyLoggedIn){
      localStorage.setItem('logged', false);

      dispatch(logoutUser());

      Navigate('/login');
    }
    

  }


  return (
    <>

      <h1> Dashnoard Here</h1>
      <button onClick={handleLogout}> Logout</button>
      <nav>
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/account">Account</Link>
      </nav>



    </>
  )
}
export default Dashboard;