import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="category">

            <Link to="/dormitory">
                 dormitory 
             </Link>

             <Link to="/education">
                 education
             </Link>
             <Link to="/facility">
                 facility
             </Link>
             <Link to="/human">
                 Human
             </Link>
             <Link to="/student">
                 student
             </Link>
             <Link to="/welfare">
                 welfare
             </Link>
 
        </div>
    );
}
export default  Home;