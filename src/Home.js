import React from "react";
import { Link } from "react-router-dom";
import Articles from './table/Articles';

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
             <Articles></Articles>
 
        </div>
    );
}
export default  Home;