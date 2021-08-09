import React from "react"
import "./sidebar.css"

export default class SideBar extends React.Component {
    render() {
        return (
            <div class="SideBar">
                <div className="SideBarWrapper">
                    <ul className="SideBarList">
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Feed</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Story</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Chat</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Friends</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">MongoDB</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">MySqL</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Crud Reactjs</span>
                        </li>
                        <li className="SideBarListItem">
                            <span className="SideBarIcon">P</span>
                            <span className="SideBarListItemText">Registration</span>
                        </li>
                    </ul>
                    <button className="button button-grey">Show more</button>
                    <hr class="SideBarHr" />
                    <h2>Friends</h2>
                    <ul className="UsersList">
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Bisimwa Grace</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Diane UWASE</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Peter KAHUMUZA</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Christian BAHIZI</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Christian MAPENDANO</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Christian LWABOSHI</span>
                        </li>
                        <li className="UsersListItem">
                            <img src="/assets/images.jpg" alt="Profil" className="UserProfilImg" />
                            <span className="UserName">Eddy MATABISHI</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}