import React,{Component} from "react";

class UpdateControl extends Component{//create update delete 기능 
    render(){
        return(
            <div>
                <table className="control-table"> 
                <tbody>
                    <tr >
                        <td>
                            <button className="agree-button"value="agree" onClick={function(e){
                                var a='agree';
                                e.preventDefault();
                                this.props.onchangeMode(a);
                            }.bind(this)}>청원 동의하기</button>
                            <a className="update-button" href="/update" onClick={function(e){
                                var a='update';
                                e.preventDefault();
                                this.props.onchangeMode(a);
                            }.bind(this)}>글 수정하기 </a>
                            <button className="delete-button" value="delete" onClick={function(e){
                                var a='delete';
                                e.preventDefault();
                                this.props.onchangeMode(a);
                            }.bind(this)}>글 삭제하기</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr className="mainline"></hr>
            <a className="goToPost-button" href="/post" onClick={function(e){
                var a='post';
                e.preventDefault();
                this.props.onchangeMode(a);
            }.bind(this)}>글 목록</a>
            </div>


      
         );
       
    }
}

export default UpdateControl;