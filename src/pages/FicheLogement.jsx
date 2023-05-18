import { useParams } from "react-router-dom";
import kasaList from "../data/kasaList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/carousel";
import Title from "../components/Title"
import Profile from "../components/Profile"
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import CollapseListe from "../components/CollapseListe";
import Rating from "../components/Rating"
import '../style/css/index.css'

function FicheLogement() {
    const { id } = useParams();

    const tab = kasaList.find((element) => element.id === id);
    
    console.log(tab.title)
    
    return (
        <div>
            <div className="main">
                <Header />
                <Carousel
                    pictures={tab.pictures}
                />
                <div className="titre">
                    <Title
                        title={tab.title}
                        location={tab.location}
                    />
                    <Profile
                        name={tab.host.name}
                        picture={tab.host.picture}
                    />
                </div>
                <div className="tagsRating">
                    {tab.tags.map((tag,index) => (
                        <ul key={index}>
                            <Tags
                                tag={tag}
                            />
                        </ul>                        
                    ))}   
                    <Rating
                        rating={tab.rating}
                    />                 
                </div>
                <div className="collapse">
                        <Collapse
                            description={tab.description}
                        />
                        <CollapseListe
                            equipments={tab.equipments}
                        />       
                </div>

                <p>{tab.equipments}</p>
                
               
            </div>
            <Footer />
        </div>
    )
}

export default FicheLogement