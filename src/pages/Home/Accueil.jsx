import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Banniere from "../../components/Banniere"
// import LayoutLocation from "../../components/LayoutLocation"
import '../../style/css/index.css'
function Accueil() {
    return (
        <div>
            <div className="main">
                <Header />
                <Banniere />
                {/* <LayoutLocation /> */}
            </div>
            <Footer />
        </div>
        
        

    )
}

export default Accueil