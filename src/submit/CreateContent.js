import React,{Component} from "react";

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form method="post"
                    onSubmit={function(e){
                      
                        e.preventDefault();
                        
                        this.props.onSubmit(
                            e.target[0].value,
                            e.target[1].value
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