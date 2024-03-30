// import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../Login/UserContext/UserContext'
import { useContext } from 'react'

export default function Header() {
    const navigate = useNavigate()
    const { userId } = useContext(UserContext)
    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }
    return (

        <>
            <header className="header-main">
                <div className="header-main-logo">
                    {/* <img src="../img/male-avatar.jpg" alt="" /> */}
                </div>

                <nav className="header-main-nav">
                    <ul>
                        {/* li><Link to={`/home/${userId}`} */}
                        <li><Link to={`/home`}>HOME</Link></li>
                        {/* <li><a href={`/profile`}>PROFILES</a></li> */}
                        <li><a href={`/events`}>EVENTS</a></li>
                        <li><Link to="/summary">ADMINISTRATION</Link></li>
                        <li> <Link to="/" onClick={handleLogout}>LOGOUT</Link></li>
                    </ul>
                </nav>

                <div className="header-main-sm">
                    <a href="#"><div className="header-main-sm-fb"></div></a>
                    <a href="#"><div className="header-main-sm-in"></div></a>
                </div>
            </header ></>
    )
}
