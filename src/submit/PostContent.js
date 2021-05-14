import React,{Component} from "react";

class PostContent extends Component{
    render(){
        var lists=[];
        var data=this.props.data;
        
        var i=0;
        if(data.length===0){
            return(
                <div>게시물이 없습니다.</div>);
        }else{
            while(i<data.length){
                lists.push(
                    <li key={data[i].id} >
                    <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
   
                        e.preventDefault();
                        this.props.onchangePage(e.target.dataset.id);
                        
                    }.bind(this)}
                    >
                    {data[i].title}</a>
                    </li>
                )
                i=i+1;
            }
        }
       
        return(
            <>
            <h2>{this.props.desc}</h2>
            <nav>
                
                <ul > 
                    {lists}
                </ul>
            </nav>
            </>

        );
    }
}

export default PostContent;