import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import "./navbar.css"

export default function BurgerMenu() {
    const [status, setStatus] = useState('close')
    const [statusMenu, setStatusMenu] = useState('closeMenu')
    function activateMenu() {
        setStatus(status === 'open' ? 'close' : 'open')
        setStatusMenu(statusMenu === 'openMenu' ? 'closeMenu' : 'openMenu')
    }
    return (
        <nav>
            <div className="burger-menu-container"
                role="button"
                onClick={activateMenu}
            >
                <i className={status} />
                <i className={status} />
                <i className={status} />
            </div>
            <div className="burger-menu">
                <div className={statusMenu}>
                    <ul className="list">
                        <li className="items">
                            <Link className="link" to="/" onClick={activateMenu}>
                                <div className="link-nav">Inicio</div>
                            </Link>
                        </li>
                        <li className="items">
                            <Link className="link" to="/type" onClick={activateMenu}>
                                <div className="link-nav">Vota</div>
                            </Link>
                        </li>
                        <li className="items">
                            <Link className="link" to="/info" onClick={activateMenu}>
                                <div className="link-nav">Info</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
