import React, { Component } from "react";
import { Link } from "react-router-dom";
import Control from "./submit/control";
import CreateContent from "./submit/CreateContent";
import im from "./submit/im";
import ReadContent from "./submit/ReadContent";
import Articles from './table/Articles';

class Type extends Component{
  
    render(){
        var lists=[];
        var data=this.props.data;
        var i=0;
        while(i<data.length){
            lists.push(
                <td>
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    //console.log(e.target.dataset);
                    e.preventDefault();
                    this.props.onchangePage(e.target.dataset.id);
                }.bind(this)}
                >
                {data[i].desc}
                </a>
                </td>
            )
            i=i+1;
        }
        return(
            <table > 
                <tr >
                {lists}
                </tr>
            </table>

        );
    }
};
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:'welcome',
            selected_content_id:0,
            type:[
                {id:0,title:"dormitory",desc:"기숙사"},
                {id:1,title:"education",desc:"교육"},
                {id:2,title:"facility",desc:"편의 시설"},
                {id:3,title:"human",desc:"인권"},
                {id:4,title:"student",desc:"학생"},
                {id:5,title:"welfare",desc:"복지"},
                {id:6,title:"etc",desc:"기타"}
            ]
        }
    }
    render(){
        var _title,_desc,_article=null;
        if(this.state.mode==='welcome'){
            _article=
            <>
                <Articles></Articles>
                <Link to="/im">임시</Link> 
            </>
               
        }
        else if(this.state.mode==='read'){
            var i=this.state.selected_content_id;
            var data=this.state.type[i];
            var _title=data.title;
            var _desc=data.desc;
            _article=
            <>
            <ReadContent title={_title} desc={_desc}/>
            <Control  onchangeMode={function(_mode){
               this.setState({mode:_mode});
            }.bind(this)}/>
            </>
        }else if(this.state.mode==='create'){
            _article=<CreateContent onSubmit={
                function(_title,_desc){
                    //add content
                    //console.log(_title,_desc);
                }.bind(this)}>

                </CreateContent>
        }
        return(
            <div className="category">
          
                <h1>
                    <a href="/" >
                        한국외국어대학교 청원 홈페이지
                    </a> 
                    <img src="http://hufsjournal.com/wp-content/uploads/2015/08/%EB%AF%B8%EB%84%A4%EB%A5%B4%EB%B0%94-%EC%97%AC%EC%8B%A0%EA%B3%BC-%EB%B6%80%EC%97%89%EC%9D%B4.jpg" width="80" height="80" alt="로고"/>     
                </h1>
                
                <p>
                <Type onchangePage={function(id){
                    this.setState({
                    mode:'read',
                    selected_content_id:Number(id)
                    });
                    }.bind(this)}
                    data={this.state.type}/></p>
                
            
                {_article}
                

            </div>
        );
    }
}
export default  Home;