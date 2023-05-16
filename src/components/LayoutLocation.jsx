
import kasaList from "../data/kasaList"

import Card from "./Card"

function LayoutLocation() {
    
    return (
		<section>				
            {kasaList.map(({ id, cover, title}) =>
                <Card
                    key={id}
                    cover={cover}
                    title={title}
                />                        
            )}			
		</section>
	)
    
}

export default LayoutLocation