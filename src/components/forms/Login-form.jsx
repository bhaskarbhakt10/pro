

import PasswordInp from "../microcomponents/PasswordInp";

const LoginForm = () => {



    return (
        <div className="w-full max-w-sm">
            <div action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2"> Username </label>
                    <input type="tel" name="" id="username" placeholder="Phone Number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <PasswordInp />
                </div>
                <div>
                    <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all">Login</button>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;