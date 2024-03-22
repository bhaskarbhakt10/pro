import { useState } from "react";
import LoginForm from "../../components/forms/Login-form";
import SignupForm from "../../components/forms/Signup-form";

const Login = () => {
    const [defaultState, setdefaultStateTab] = useState([
        {
            tabSignup: true,
            tabLogin: false,
        },
    ]);

    const ShowLogin = (e, setValue) => {
        const defaultValues = defaultState[0];
        for (const key in defaultValues) {
            defaultValues[key] = false;
            if (key === setValue) {
                defaultValues[key] = true;
            }
        }

        setdefaultStateTab([defaultValues]);
    };

    return (
        <>
            
            <div className="d-block mx-auto">
            <div className="flex">
                <div className="">
                    <button
                        type="button"
                        value="tabSignup"
                        onClick={(e) => ShowLogin(e, e.target.value)}>
                        Sign Up
                    </button>
                </div>
                <div className="">
                    <button
                        type="button"
                        value="tabLogin"
                        onClick={(e) => ShowLogin(e, e.target.value)}>
                        Log In
                    </button>
                </div>
            </div>

            <div className="tab-content">
                {defaultState[0].tabSignup === true ? (
                    <div className="tabSignup">
                        <SignupForm/>
                    </div>
                ) : (
                    <div className="tabLogin">
                        <LoginForm />
                    </div>
                )}
            </div>
            </div>

        </>
    );
};

export default Login;
