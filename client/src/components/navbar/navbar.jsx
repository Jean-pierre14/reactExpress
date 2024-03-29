import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavBar">
                <div className="NavBarLeft">
                    <span className="logo">
                        Mr. Bisimwa
                    </span>
                </div>
                <div className="NavBarCenter">
                    <div className="SearchNavBar">
                        <input type="search" name="search" id="search" placeholder="Search" className="NavBarinput" />
                    </div>
                </div>
                <div className="NavBarRight">
                    <div className="Links">

                        <ul className="ListNavBar">
                            <li className="ListItem">
                                <span> P </span>
                                <span>Message</span>
                            </li>
                            <li className="ListItem">
                                <span> P </span>
                                <span>Profil</span>
                            </li>
                            <li className="ListItem">
                                <span> P </span>
                                <span>About</span>
                            </li>
                        </ul>
                        <img src="/assets/images.jpg" alt="Profil image" className="profilImg" />
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar