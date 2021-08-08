import React from "react"
import "./navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="NavBarLeft">
                    <span className="logo">
                        Jean-Pierre14
                    </span>
                </div>
                <div className="NavBarCenter">
                    <input type="search" name="search" id="search" placeholder="Search" className="input" />
                </div>
                <div className="NavBarRight">
                    <img src="" alt="Profil image" className="profilImg" />
                    <ul className="List">
                        <li className="ListItem">
                            <span>P</span>
                            <span>Message</span>
                        </li>
                        <li className="ListItem">
                            <span>P</span>
                            <span>Profil</span>
                        </li>
                        <li className="ListItem">
                            <span>P</span>
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar