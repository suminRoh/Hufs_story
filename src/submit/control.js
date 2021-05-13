import React,{Component} from "react";
import { render } from "@testing-library/react";

class Control extends Component{//create update delete 기능 
    render(){
        return(
            <table > 
                <tr >
                    <td><a href="/create" onClick={function(e){
                        e.preventDefault();
                        this.props.onchangeMode('create');
                    }.bind(this)}>create</a></td>
                    <td><a href="/update" onClick={function(e){
                        e.preventDefault();
                        this.props.onchangeMode('update');
                    }.bind(this)}>update</a></td>
                    <td><input type="button" value="delete" onClick={function(e){
                        e.preventDefault();
                        this.props.onchangeMode('delete');
                    }.bind(this)}></input></td>
                </tr>
            </table>
      
         );
       
    }
}

export default Control;