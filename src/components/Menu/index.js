import React from 'react'
import Logo from '../../assets/img/Logo.png'
// import Profile from '../../assets/img/Profile.jpg'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo DrumsFlix"/>
            </a>

            {/* <ul className="MenuItems">
                <li>
                    <a className="" href="/">
                        Add New
                    </a>
                </li>
                <li>
                    Pratices
                </li>
                <li>
                    Groove
                </li>
                <li>
                    Favorite
                </li>
            </ul>

            <div className="ProfileArea">
                <i class="fas fa-search"></i>
                <img className="Profile" src={Profile} alt="Photo Profile"/>
            </div> */}

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu