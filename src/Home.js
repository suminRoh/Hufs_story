import React, { Component } from "react";
import { Link } from "react-router-dom";
import Control from "./submit/control";
import CreateContent from "./submit/CreateContent";
import PostContent from "./submit/PostContent";
import ReadContent from "./submit/ReadContent";
import UpdateContent from "./submit/UpdateContent";
import Articles from './table/Articles';
import Type from "./Type";


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            max_content_id:0,//전체 게시물 번호 매김
            mode:'welcome',
            selected_content_id:0,//선택된 게시글 번호
            selected_type_id:0,//카테고리 id
            type:[
                {id:0,title:"dormitory",desc:"기숙사"},
                {id:1,title:"education",desc:"교육"},
                {id:2,title:"facility",desc:"편의시설"},
                {id:3,title:"human",desc:"인권"},
                {id:4,title:"student",desc:"학생"},
                {id:5,title:"welfare",desc:"복지"},
                {id:6,title:"etc",desc:"기타"}
            ],
            contents:[// 게시글 리스트
               
            ]
           

        }
    }
    render(){
        var _title,_desc,_article=null;
        if(this.state.mode==='welcome'){
            _article=
            <>
                <Articles></Articles>
              
            </>
               
        }
        else if(this.state.mode==='read'){ //선택된 게시물과 리스트가 같이 뜸 
            var i=this.state.selected_content_id;
            var data=this.state.contents[i];
        
            _title=data.title;
            _desc=data.desc;
            _article=<>
               
                
                <PostContent onchangePage={function(id){
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                     });
                }.bind(this)}
                data={this.state.contents}/>
                    
            <ReadContent title={_title} desc={_desc}/>        
            <Control  onchangeMode={function(_mode){
                    if(_mode==='delete'){
                        if(window.confirm("이 게시물을 삭제하시겠습니까?")){
                            var i=this.state.selected_content_id;
                            var new_max_content_id=this.state.max_content_id-1;
                            var _contents=Array.from(this.state.contents);
                            _contents.splice(i,1);
                            this.setState({
                                mode:'welcome',
                                contents:_contents,
                                max_content_id:new_max_content_id
                            });
                            alert("삭제되었습니다.");
                        }
                    }else{
                        this.setState({mode:_mode});
                    }
               
                }.bind(this)}/>

            </>
           
        }else if(this.state.mode==='post'){ //리스트만 뜸 
            _article=<>
                <PostContent onchangePage={function(id){
                    this.setState({
                        selected_content_id:Number(id),
                        mode:'read'
                 });
                }.bind(this)}
                data={this.state.contents}/>
                <Control  onchangeMode={function(_mode){
                
                    if(_mode==='delete'){
                        if(window.confirm("이 게시물을 삭제하시겠습니까?")){
                            var i=this.state.selected_content_id;
                            var new_max_content_id=this.state.max_content_id-1;
                            var _contents=Array.from(this.state.contents);
                            _contents.splice(i,1);
                            this.setState({
                                mode:'welcome',
                                contents:_contents,
                                max_content_id:new_max_content_id
                            });
                            alert("삭제되었습니다.");
                        }
                    }else{
                        this.setState({mode:_mode});
                    }
               
                }.bind(this)}/>

                
            </>

        }else if(this.state.mode==='create'){
            _article=<CreateContent onSubmit={
                function(_title,_desc){
                    var new_max_content_id=this.state.max_content_id+1;
                    var _type=this.state.selected_type_id;
                    var _contents=Array.from(this.state.contents);
                    _contents.push({type:_type,title:_title,desc:_desc,id:this.state.max_content_id});
                    this.setState({
                        contents:_contents,
                        mode:'read', 
                        max_content_id:new_max_content_id,
                    })
                    console.log(this.state.contents);
                }.bind(this)}>
    
                </CreateContent>
        }else if(this.state.mode==='update'){
            i=this.state.selected_content_id;
            var _content=this.state.contents[i];
            _article=<UpdateContent data={_content} onSubmit={
                function(_id,_title,_desc){
                    i=this.state.selected_content_id;
                    var _type=this.state.selected_type_id;
                    var _contents=Array.from(this.state.contents);
                    _contents[i]={type:_type,title:_title,desc:_desc,id:_id}
    
                    this.setState({
                        contents:_contents,
                        mode:'read'
                    })
                    
                }.bind(this)}>
    
                </UpdateContent>
        }
        return(
            <div className="category">
          
                <h1>
                    <a href="/" >
                        한국외국어대학교 청원 홈페이지
                    </a> 
                    <img src="http://hufsjournal.com/wp-content/uploads/2015/08/%EB%AF%B8%EB%84%A4%EB%A5%B4%EB%B0%94-%EC%97%AC%EC%8B%A0%EA%B3%BC-%EB%B6%80%EC%97%89%EC%9D%B4.jpg" width="80" height="80" alt="로고"/>     
                </h1>
                
                
                <Type onchangePage={function(id){
                    this.setState({
                    mode:'post',
                    selected_type_id:Number(id)
                    });
                    }.bind(this)}
                    data={this.state.type}/>
                
            
                {_article}
                

            </div>
        );
    }
}
export default  Home;