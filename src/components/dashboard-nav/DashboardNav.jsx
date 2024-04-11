import { Link } from "react-router-dom"
import Logout from "../microcomponents/Logout"

import { MdSpeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const DashboardNav = () => {

    return (
        <>
            <div>
                <div className="logo-container">

                </div>
                <div className="navigation-conatiner">
                    <nav className="nav-menu">
                        <ul className="">
                            <li> <Link to="/user/dashboard">
                                <span className="menu-item-icon">
                                    <MdSpeed />
                                </span>
                                <span className="menu-item-name" >
                                    Dashboard
                                </span>
                            </Link></li>
                            <li> <Link to="/user/profile">

                                <span className="menu-item-icon">
                                    <CgProfile />
                                </span>
                                <span className="menu-item-name">
                                    Profile
                                </span>
                            </Link></li>
                            <li> <Link to="/user/card">Edit Card</Link></li>
                            <li> <Logout /> </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )

}

export default DashboardNav