import { Link, useLocation } from 'react-router-dom'
import React, { useState } from "react"
import logo from '../assets/Logo.png'
import '../style/css/index.css'
 
function Header() {
const [activePage, setActivePage] = useState('')
const location = useLocation()

React.useEffect(()=>{
    setActivePage(location.pathname)
},[location])

    return (
        <header >
            <img  src={logo} alt="logo" />
            <nav>
                <Link 
                    to="/"
                    onClick={() => setActivePage('/')}
                    className={activePage === '/' ? 'underline' : ''}
                >
                        Accueil
                </Link>
                <Link 
                    to="/APropos"
                    onClick={() => setActivePage('/APropos')}
                    className={activePage === '/APropos' ? 'underline' : ''}
                >
                        A Propos
                </Link>
            </nav>
        </header>        
    )
}

export default Header