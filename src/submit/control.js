import React,{Component} from "react";

class Control extends Component{//create update delete 기능 
    render(){
        return(
            <table > 
                <tbody>
                    <tr >
                        <td><a href="/create" onClick={function(e){
                            e.preventDefault();
                            var a='create';
                            this.props.onchangeMode(a);
                        }.bind(this)}>create</a></td>
                        <td><a href="/update" onClick={function(e){
                            var a='update';
                            e.preventDefault();
                            this.props.onchangeMode(a);
                        }.bind(this)}>update</a></td>
                        <td><button value="delete" onClick={function(e){
                            var a='delete';
                            e.preventDefault();
                            this.props.onchangeMode(a);
                        }.bind(this)}>delete</button></td>
                    </tr>
                </tbody>
            </table>
      
         );
       
    }
}

export default Control;