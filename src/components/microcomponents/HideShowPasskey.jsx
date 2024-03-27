import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const HideShowPasskey = (props) => {


    const { onClick } = props

    const [showPass, setPass] = useState(false);

    const ShowHidePassword = (e) => {
        e.preventDefault();
        onClick();
        if (showPass === false) {
            setPass(true);
        }
        else {
            setPass(false);
        }
    }

    return (


        <>
            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 py-2 px-3 rounded-md dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all" onClick={ShowHidePassword}>
                {showPass === false ? <FaEye /> : <FaEyeSlash />}
            </button>
        </>

    )
}

export default HideShowPasskey;