import { useState } from "react";
import HideShowPasskey from "../microcomponents/HideShowPasskey";


const PasswordInp = (props) => {


    const { name , id , placeholder , value, onChange } = props;

    // console.log(props);

    const [passVisibility, setpassVisibility] = useState(false);


    const togglePasswordVisibility = () => {
        setpassVisibility(!passVisibility)
    }

    return (

        <>

            <div className="relative">
                <input type={passVisibility === false ? 'password' : 'text'} name={name !== null ? name : 'password123'} id={ id !== null ? id : 'password'} placeholder={placeholder} value={value} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="password" onChange={onChange} />
                <div className="absolute top-0 right-0 h-full grid">
                    <HideShowPasskey onClick={togglePasswordVisibility} />
                </div>
            </div>


        </>


    )


}

export default PasswordInp;