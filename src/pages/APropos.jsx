import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banniere from "../components/Banniere"
import Collapse from "../components/Collapse"
import banniere_APropos from "../assets/banniere_APropos.png" 
import aProposListe from "../data/aProposListe.json"

function APropos() {
    
    return (
        <React.Fragment>
            <div className="main">
                <Header />
                <Banniere 
                    img={banniere_APropos}
                />
                <div className="apropos">
                    {aProposListe.map((element,index) => (
                        <div key={index} className="collapse__apropos">
                            <Collapse
                                element={element.description}
                                name={element.title}
                            />
                        </div>
                    ))}
                </div>
                                   
            </div>
            <Footer />
        </React.Fragment>   
    )
}

export default APropos