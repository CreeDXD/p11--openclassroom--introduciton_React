function Card({cover,title}) {
    return (
            <div>
                <img src={cover} alt={`${title} cover`} />
                <p>{title}</p>
            </div>
    
        )
}

export default Card