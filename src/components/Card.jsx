import { Link } from "react-router-dom"

function Card({id,cover,title}) {

    return (
        <Link to={`/FicheLogement/${id}`}>
            <div className="layout__card">                
                <img src={cover} alt={`${title} cover`} />
                <p>{title}</p>
            </div>
        </Link>       
    )
}

export default Card