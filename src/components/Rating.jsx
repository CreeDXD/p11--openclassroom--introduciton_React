import etoileGrise from "../assets/etoileGrise.png"
import etoileOrange from "../assets/etoileOrange.png"
import "../style/css/index.css"

function Rating({rating}) {
    const etoileAffiche = []

    for(let i= 0; i < 5; i++){
        if(i < rating){
            etoileAffiche.push(<img key={i} src={etoileOrange} alt="étoile orange" />)
        }
        else{
            etoileAffiche.push(<img key={i} src={etoileGrise} alt=" étoile grise" />)
        }
    }
    return (
       <div  className="tagsRating__rating">
            {etoileAffiche}
       </div>
    )
}

export default Rating