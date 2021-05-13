import React,{Component} from "react";
import { render } from "@testing-library/react";

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form method="post"
                    onSubmit={function(e){
                        console.log(e.target.text.value);
                        e.preventDefault();
                        
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                        alert("submit");
                    }.bind(this)}
                >
                    <p><input type="text" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}


export default CreateContent;