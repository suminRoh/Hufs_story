import React,{Component} from "react";
import { render } from "@testing-library/react";

class ReadContent extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.desc}</h2>
       
            </article>
        );
    }
}

export default ReadContent;