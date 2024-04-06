import { useState } from "react";
import axios from "axios";
import PasswordInp from "../microcomponents/PasswordInp";

import { useDispatch } from "react-redux";
import { loginUser } from "../../features/login/loginSlice";

import { useNavigate } from "react-router-dom";

const { VITE_BASE_URL } = import.meta.env;

const LoginForm = () => {
    const [login, setLogin] = useState({ username: "", password: "" });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLoginInput = (name, value) => {
        const prevstate = { ...login };
        prevstate[name] = value;
        setLogin(prevstate);
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        localStorage.setItem('logged', false);


        try {
            const response = await axios({
                method: 'POST',
                url: `${VITE_BASE_URL}controller-login.php`,
                data: login,
            });



            const { status, ID, email, f_name, l_name, u_name, phone_no } = response.data;


            if (status) {

                const UserInfo = {
                    ID: ID,
                    email: email,
                    f_name: f_name,
                    l_name: l_name,
                    u_name: u_name,
                    phone_no: phone_no,
                }
                // console.log(UserInfo);
                localStorage.setItem('logged', true);
                dispatch(loginUser(UserInfo))
                return navigate('/user/dashboard');

            }
            else {

                localStorage.setItem('logged', false);

            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }




    };

    return (
        <div className="w-full max-w-sm">
            <form
                action=""
                onSubmit={handleLogin}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => handleLoginInput(e.target.name, e.target.value)}
                        value={login.username}
                        placeholder="Username, Phone Number or Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <PasswordInp
                        name={"password"}
                        id={"password"}
                        placeholder={"Enter Password"}
                        value={login.password}
                        onChange={(e) => handleLoginInput(e.target.name, e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
