import { useState } from "react";
import PasswordInp from "../microcomponents/PasswordInp";


const SignupForm = () => {


    const [signUpForm, setSignUpForm] = useState({});


    const handleSignUpInput = (name, value) => {

        const previousState = { ...signUpForm }
        previousState[name] = value;
        setSignUpForm(previousState);
    }


    const handleSignup = (e) => {

        e.preventDefault();

        console.log(signUpForm);


    }

    return (

        <>
            <form action="" onSubmit={handleSignup}>
                <div className="w-full max-w-screen-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 grid-rows-2 gap-x-9">
                        <div className="mb-4">
                            <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2"> First Name * </label>
                            <input type="text" name="first_name" value={signUpForm.first_name !== undefined ? signUpForm.first_name : ''} onChange={(e) => handleSignUpInput(e.target.name, e.target.value)} id="first_name" placeholder="Jhon" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2"> Last Name * </label>
                            <input type="text" name="last_name" value={signUpForm.last_name !== undefined ? signUpForm.last_name : ''} onChange={(e) => handleSignUpInput(e.target.name, e.target.value)} id="last_name" placeholder="Doe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"> Email * </label>
                            <input type="email" name="email" id="email" value={signUpForm.email !== undefined ? signUpForm.email : ''} onChange={(e) => handleSignUpInput(e.target.name, e.target.value)} placeholder="jhondoe@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2"> Phone Number * </label>
                            <input type="tel" name="phone_number" id="phone_number" value={signUpForm.phone_number !== undefined ? signUpForm.phone_number : ''} onChange={(e) => handleSignUpInput(e.target.name, e.target.value)} placeholder="jhondoe@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2"> User name * </label>
                            <input type="text" name="username" id="username" placeholder="Jhon_123" value={signUpForm.username !== undefined ? signUpForm.username : '' } onChange={(e)=> handleSignUpInput(e.target.name, e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <PasswordInp name={'password'} id={'password'} placeholder={'Enter Password'}  value={signUpForm.password !== undefined ? signUpForm.password : '' } onChange={(e)=> handleSignUpInput(e.target.name, e.target.value)}  />
                        </div>

                        <div>
                            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all">Login</button>
                        </div>
                    </div>
                </div>


            </form>

        </>

    )


}

export default SignupForm;