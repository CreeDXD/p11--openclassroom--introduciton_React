import arrowDown from "../assets/arrowDown.png"
import arrowUp from "../assets/arrowUp.png"

function Collapse({description}) {
    
    return (
        <div className="collapse__main">
            <div className="collapse__button">
                <img src={arrowDown} alt="flèche vers le bas" />
                <img src={arrowUp} alt="flèche vers le haut" />
            </div>
            <p>{description}</p>
        </div>
        
    )
}

export default Collapse
