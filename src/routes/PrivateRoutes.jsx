import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

    const logged = JSON.parse(localStorage.getItem("logged"));
    const authTokenValidated = useSelector((state) => state.login.is_logged);
    
    const [authToken, setAuthToken] = useState({ token: logged});
    

    useEffect(() => {
        setAuthToken({ token: logged});
    }, [authTokenValidated]);

    return authToken.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
