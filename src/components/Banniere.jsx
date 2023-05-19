import '../style/css/index.css'

function Banniere({element, img}) {
    return (
        <div className='banner'>
            <img src={img} alt="bannière" />
            {element}
        </div>

    )
}

export default Banniere