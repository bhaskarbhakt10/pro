import LoginForm from "../../components/forms/Login-form";


const Login = () => {

    return (
        <>

        <div className="flex">
            <div className="">
                <button type="button">
                    Sign Up
                </button>
            </div>
            <div className="">
                <button type="button">
                    Log In
                </button>
            </div>
        </div>

            <LoginForm />

        </>
    )
}

export default Login;