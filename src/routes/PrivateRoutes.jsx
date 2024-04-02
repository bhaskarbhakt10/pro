import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {

    const authToken = { token: false };

    return (

        authToken.token === true ? <Outlet /> : <Navigate to="/login" />

    )


}

export default PrivateRoutes;