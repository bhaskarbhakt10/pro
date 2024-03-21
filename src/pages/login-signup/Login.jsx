import { useState } from "react";
import LoginForm from "../../components/forms/Login-form";


const Login = () => {


    const [signup, setSignup] = useState(true);


    const ShowLogin = ()=>{

        // if(signup)
    }

    return (
        <>

        <div className="flex">
            <div className="">
                <button type="button" onClick={ShowLogin}>
                    Sign Up
                </button>
            </div>
            <div className="">
                <button type="button" onClick={ShowLogin}>
                    Log In
                </button>
            </div>
        </div>

        <div className="tab-content">
            <div className="tabSignup">
                <h1>
                   Signup Goes Here 
                </h1>
            </div>
            <div className="tabLogin">
                <LoginForm />
            </div>
        </div>


        </>
    )
}

export default Login;