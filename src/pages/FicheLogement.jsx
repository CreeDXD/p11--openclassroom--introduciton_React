import { useParams } from "react-router-dom";
import PageErreur from "./PageErreur"
import kasaList from "../data/kasaList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/carousel";
import Title from "../components/Title"
import Profile from "../components/Profile"
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating"
import '../style/css/index.css'

function FicheLogement() {
    const { id } = useParams();

    const tab = kasaList.find((element) => element.id === id);
    
//if tab undefined the id dosen't match so redirected to page error
//else display page Logement
    if(tab === undefined)
    {
        return <PageErreur/>
    }
    else
    {
        const tabEquipments = []
        tab.equipments.forEach((equipment)=>{
            tabEquipments.push(<li>{equipment}</li>)
        })

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
                        <ul className="tagsRating__tags">
                            {tab.tags.map((tag,index) => (
                                <div key={index}  >
                                    <Tags
                                        tag={tag}
                                    />
                                </div>
                            ))}   
                        </ul>
                        
                        <Rating
                            rating={tab.rating}
                        />                 
                    </div>
                    <div className="collapse">
                        <div className="collapse__main">
                            <Collapse
                                    element={tab.description}
                                    name="Description"
                            />
                        </div>
                        <div className="collapse__main">
                            <Collapse 
                                element={tabEquipments}
                                name="Équipements"
                            />    
                        </div>
                                                    
                    </div>                
                
                </div>
                <Footer />
            </div>
        )
    }
    
}

export default FicheLogement