import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";{ }

const Logout = ()=>{

    const dispatch = useDispatch();
    const isCurrentlyLoggedIn = useSelector((state)=> state.login.is_logged);
    const isLogged = localStorage.getItem('logged');
    const Navigate = useNavigate();
  
    const handleLogout = (e) => {
      e.preventDefault();
      console.log("Log me out");
      console.log(isCurrentlyLoggedIn);
      if(isCurrentlyLoggedIn || isLogged){
        localStorage.setItem('logged', false);
  
        dispatch(logoutUser());
  
        Navigate('/login');
      }
      
  
    }

    return(
        <>
        <button onClick={handleLogout}> Logout</button>
        </>
    )

}

export default Logout;