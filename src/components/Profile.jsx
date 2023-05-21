function Profile({name,picture}) {   
    
    return (
        <div className="profileRating__profile">
            <img src={picture} alt={`profile of ${name}`} />
            <p>{name}</p>
        </div>
    )
}

export default Profile