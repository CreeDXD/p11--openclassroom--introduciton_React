import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../style/css/index.css'
 
function Header() {
    return (
        <header >
            <img  src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </header>        
    )
}

export default Header