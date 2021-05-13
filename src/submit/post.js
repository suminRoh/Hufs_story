import { render } from "@testing-library/react";
import React,{Component} from "react";

class Post extends Component{ 
    
    render(){
     return(
         <div>
            <h1>{this.props.type}</h1>
            <button><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onchangeMode('create');
                }.bind(this)}>create</a></button>
            <button><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onchangeMode('update');
                }.bind(this)}>update</a></button>
         </div>
        
       
     );
    }
 };

 export default Post;
 