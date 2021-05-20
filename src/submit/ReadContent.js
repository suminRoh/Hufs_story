import React,{Component} from "react";
import "./read.css";
class ReadContent extends Component{
    render(){
        
        return(
            <article className="article_box">
                <div className="article_title">
                    <h2>{this.props.title}</h2>
                </div>
                <small>청원동의 {this.props.agree}명</small>
                <div className="article_content">
                    
               
                    <h3> {this.props.desc}</h3>
                    <p></p>
                   
                </div>
                
            
            </article>
        );
    }
}

export default ReadContent;