const SignupForm = ()=>{

    return(

        <>
        <form action="">

        <div className="w-full max-w-screen-md">
                <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 grid-rows-2 gap-x-9">
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2"> First Name * </label>
                        <input type="text" name="" id="first_name" placeholder="Jhon" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2"> Last Name * </label>
                        <input type="text" name="" id="last_name" placeholder="Doe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"> Email * </label>
                        <input type="email" name="" id="email" placeholder="jhondoe@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2"> Phone Number * </label>
                        <input type="tel" name="" id="phone_number" placeholder="jhondoe@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2"> User name * </label>
                        <input type="text" name="" id="username" placeholder="Jhon_123" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2"> Password * </label>
                        <input type="password" name="" id="password" placeholder="****************" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    
                    <div>
                        <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all">Login</button>
                    </div>
                </form>
            </div>


        </form>
        
        </>

    )


}

export default SignupForm;