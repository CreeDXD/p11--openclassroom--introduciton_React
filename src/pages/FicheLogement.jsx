import React from "react"
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
        tab.equipments.forEach((equipment,index)=>{
            tabEquipments.push(<li key={index}>{equipment}</li>)
        })

        return (
        
            <React.Fragment>
                <div className="main">
                    <Header />

                    <Carousel
                        pictures={tab.pictures}
                    />

                    <div className="container-title-profile-tags-rating">
                        <div className="titreTags">
                            <Title
                                title={tab.title}
                                location={tab.location}
                            />
                            <ul className="titreTags__tags">
                                {tab.tags.map((tag,index) => (
                                    <div key={index}  >
                                        <Tags
                                            tag={tag}
                                        />
                                    </div>
                                ))}   
                            </ul>
                            
                        </div>

                        <div className="profileRating">
                            <Profile
                                    name={tab.host.name}
                                    picture={tab.host.picture}
                            />
                            
                            <Rating
                                rating={tab.rating}
                            />                 
                        </div>
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
            </React.Fragment>
        )
    }
    
}

export default FicheLogement