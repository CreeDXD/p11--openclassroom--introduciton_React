import React from 'react'
import arrowDown from "../assets/arrowDown.png"
import arrowUp from "../assets/arrowUp.png"
import { useState } from "react"

function Collapse({element,name}) {

    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleToggelCollapse = () =>{
        setIsCollapsed(!isCollapsed)
    }
    
    return (
        <React.Fragment>
            <div className="collapse__main-button" onClick={handleToggelCollapse}>
                <p>{name}</p>
                <img src={isCollapsed ? arrowDown : arrowUp} alt={isCollapsed ? 'Expand' : 'Collapse'} />
            </div>
            {!isCollapsed && <div className="collapse__main-element"><p>{element}</p></div>}
           
        </React.Fragment>        
    )
}

export default Collapse
