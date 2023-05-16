import banniere_accueil from '../assets/banniere_accueil.png'
import '../style/css/index.css'

function Banniere() {
    return (
        <div className='banner'>
            <img src={banniere_accueil} alt="bannière" />
            <p>Chez vous, partout et ailleurs</p>
        </div>

    )
}

export default Banniere