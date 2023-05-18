
import kasaList from "../data/kasaList"
import Card from "./Card"

function LayoutLocation() {
    
    return (
		<section className="layout">
            <div className="layout__padding">
                {kasaList.map(({ id, cover, title}) =>                
                    <Card
                        key={id}
                        id={id}
                        cover={cover}
                        title={title}
                    />                   
                )}
            </div>				
            
		</section>
	)
    
}

export default LayoutLocation