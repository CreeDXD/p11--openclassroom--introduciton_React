import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../style/css/index.css'
 
function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>        
    )
}

export default Header