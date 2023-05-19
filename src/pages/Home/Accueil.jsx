import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Banniere from "../../components/Banniere"
import LayoutLocation from "../../components/LayoutLocation"
import banniere_accueil from "../../assets/banniere_accueil.png"
import '../../style/css/index.css'
function Accueil() {
    const banniereTitle = <p>Chez vous, partout et ailleurs</p>
    return (
        <div>
            <div className="main">
                <Header />
                <Banniere 
                    element={banniereTitle}
                    img={banniere_accueil}
                />
                <LayoutLocation />
            </div>
            <Footer />
        </div>    
    )
}

export default Accueil