
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

  return (
    <>

      <h1> Dashnoard Here</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>

      <Outlet />

    </>
  )
}
export default Dashboard;