import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style/css/index.css"


function PageErreur() {
    return (       
        <div>
            <div className="main ">
                <Header />
                <div className='erreur'>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default PageErreur