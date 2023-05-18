

function Profile({name,picture}) {
    
    
    
    return (
        <div className="titre__profile">
            <img src={picture} alt={`profile of ${name}`} />
            <p>{name}</p>
        </div>
    )
}

export default Profile