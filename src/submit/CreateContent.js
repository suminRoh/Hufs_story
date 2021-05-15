import React,{Component} from "react";

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>청원글 작성하기</h2>
                <form method="post"
                    onSubmit={function(e){
                      
                        e.preventDefault();
                        
                        this.props.onSubmit(
                            e.target.selectBox.value,
                            e.target.title.value,
                            e.target.desc.value
                        );
                        //console.log(e.target[0].value, e.target[1].value, e.target[2].value);
                        //alert("submit");
                    }.bind(this)}
                >   
                    <p>
                        <select name="selectBox">
                            <option value="dormitory">기숙사</option>
                            <option value="education">교육</option>
                            <option value="facility">편의시설</option>
                            <option value="human">인권</option>
                            <option value="student">학생</option>
                            <option value="welfare">복지</option>
                            <option value="etc">기타</option>
                        </select>
                    </p>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}


export default CreateContent;