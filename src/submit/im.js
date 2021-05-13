import { render } from "@testing-library/react";
import React,{Component} from "react";
import Control from "./control";
import ReadContent from "./ReadContent";
import CreateContent from "./CreateContent";
import Submit from "./submit";
class Subject extends Component{
   render(){
    return(
        <header>
            <h1><a href="/" onClick={function(event){
                    console.log(event);
                    event.preventDefault();
                    this.props.onchangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
        </header>
    );
   }
};



class TOC extends Component{

  
    render(){
        var lists=[];
        var data=this.props.data;
        var i=0;
        while(i<data.length){
            lists.push(
            <li key={data[i].id} >
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    console.log(e.target.dataset);
                    e.preventDefault();
                    this.props.onchangePage(e.target.dataset.id);
                }.bind(this)}
                >
                {data[i].title}</a>
            </li>)
            i=i+1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>

        );
    }

};
class im extends Component{
   constructor(props){
       super(props);
        this.state={
            mode:'read',
            
            subject:{title:"WEb",sub:"world wide web!"},
            welcome:{title:'welcome',desc:"hello, react"},
            contents:[
                {id:1,title:"HTML",desc:"HTML is for information"},
                {id:2,title:"CSS",desc:"CSS is for design"},
                {id:3,title:"JavaScript",desc:"JavaScript is for interaction"}
            ],
            selected_content_id:3,
        }
   }
   render(){
       var _title,_desc,_article=null;
        if(this.state.mode==='welcome'){
            _title=this.state.welcome.title;
            _desc=this.state.welcome.desc;
            _article=<ReadContent title={_title} desc={_desc}/>
        }else if(this.state.mode==='read'){
            
            var i=0;
            while(i<this.state.contents.length){
                var data=this.state.contents[i];
                if(data.id===this.state.selected_content_id){
                    _title=data.title;
                    _desc=data.desc;
                    _article=<ReadContent title={_title} desc={_desc}/>
                    break;
                }
                i=i+1;
            }
        }else if(this.state.mode==='create'){
            _article=<CreateContent onSubmit={
                function(_title,_desc){
                    //add content
                    //console.log(_title,_desc);
                }.bind(this)}>

                </CreateContent>
        }
    return(
        <div className="App">
           <Subject 
           title={this.state.subject.title} 
           sub={this.state.subject.sub} 
           onchangePage={function(){
               this.setState({mode:'welcome'});
           }.bind(this)}/>
           <Control  onchangeMode={function(_mode){
               this.setState({mode:_mode});
            }.bind(this)}/>
           
           <TOC onchangePage={function(id){
               this.setState({
                   mode:'read',
                   selected_content_id:Number(id)
                });
           }.bind(this)}
            data={this.state.contents}/>
            
           
           {_article}
        </div>
    );
   }
};

export default im;