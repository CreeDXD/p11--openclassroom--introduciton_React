import { Link } from 'react-router-dom'
import "../style/css/index.css"
function PageErreur() {
    return (
        <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Accueil</Link>
        </div>
    )
}

export default PageErreur