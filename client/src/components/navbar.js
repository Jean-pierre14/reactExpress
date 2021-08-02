import React from 'react'
import NavLink from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Jean-Pierre14</NavLink>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/home">Profil</NavLink></li>
                    <li><NavLink to="/home">Logout</NavLink></li>
                </ul>
            </nav>
        )
    }
}
export default Navbar