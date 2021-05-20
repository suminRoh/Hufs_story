import React,{Component} from "react";

class AgreeContetnt extends Component{
    render(){
        return(
            <div>
                <button value="agree" onClick={function(e){
                                var a='de';
                                e.preventDefault();
                                this.props.onchangeMode(a);
                            }.bind(this)}>청원 동의하기</button>
            </div>
        );
    }
}

export default AgreeContetnt;