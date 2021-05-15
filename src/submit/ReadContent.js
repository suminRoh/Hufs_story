import React,{Component} from "react";
import "./read.css";
class ReadContent extends Component{
    render(){
        
        return(
            <article className="article_box">
                <div className="article_title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="article_content">
                    청원 글 내용 : {this.props.desc}
                </div>
    
            
            </article>
        );
    }
}

export default ReadContent;