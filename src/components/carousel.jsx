import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import { useState } from "react"

function Carousel({pictures}){
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        // Vérifiez si c'est la dernière diapositive, puis revenez à la première diapositive
        setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        // Vérifiez si c'est la première diapositive, puis passez à la dernière diapositive
        setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1);
    }

    
    return(
        <div className="carousel">
            <img className="carousel__arrow-Left" src={arrowLeft} alt="flèche vers la gauche" onClick={prevSlide}/>            
            <img className="carousel__pictures" src={pictures[currentSlide]} alt={` ${currentSlide + 1}`} />
            <img className="carousel__arrow-Right" src={arrowRight} alt="flèche vers la droite" onClick={nextSlide}/>
        </div> 
    )
}

export default Carousel