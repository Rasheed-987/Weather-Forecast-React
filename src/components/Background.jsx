import React from "react";
import "./Background.css";
import "./bridge-7675585.jpg";
const Background=()=>{

    return(
    
<>

        <div className="Background-image">
          
        
                <form className="search-container" action="">
                    <input type="text"  placeholder="Find your location..." />
                    <input onClick={(e)=>{
                        e.preventDefault();
            
                    }} type="submit"
                     value="Find" />
                </form>
            
            
    
            
        
        </div>
    
    
        
</>
        

);
}

export default Background;