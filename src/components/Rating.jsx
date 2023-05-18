import etoileGrise from "../assets/etoileGrise.png"
import etoileOrange from "../assets/etoileOrange.png"
import "../style/css/index.css"

function Rating({rating}) {
    const etoileAffiche = []

    for(let i= 0; i < 5; i++){
        if(i < rating){
            etoileAffiche.push(<img src={etoileOrange} alt="étoile orange" />)
        }
        else{
            etoileAffiche.push(<img src={etoileGrise} alt=" étoile grise" />)
        }
    }
    return (
       <div className="rating">
            {etoileAffiche}
       </div>
    )
}

export default Rating