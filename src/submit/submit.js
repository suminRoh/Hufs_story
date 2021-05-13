import React, { useState } from 'react';

/*
const Submit=({type})=>{
    
    const [content,setContent]=useState({
        title:"",
        body:""});
    const [head,setHead]=useState("");
    const [body,setBody]=useState("");

    const [viewContent, setViewContent] = useState([]);
    useEffect(()=>{
        Axios.get(`http://localhost:3000/${type}`).then((response)=>{
          setViewContent(response.data);
        })
      },[viewContent])
    
    const onSubmit=async(event)=>{
     
        Axios.post(`http://localhost:3000/${type}`, {
        title: content.title,
        body: content.body});
    };
        

    }
    const onChange=(event)=>{
       const {title,body}=event.target;
       setContent({
           ...content,
           [title]:body
       })
    };
    const onHeadChange=(event)=>{
        //const{nativeEvent:{data},}=event;
        const {target:{value},}=event;
        setHead(event);
        //console.log(data);
    const onBodyChange=(event)=>{
        //const{nativeEvent:{data},}=event;
        const {target:{value},}=event;
        setBody(event);
        //console.log(data);
    };


    return (
        
        <div>
            
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="title" value={head} onChange={onHeadChange}/>
                <input type="submit" value="update" />
                <input type="text" name="title" placeholder="title" value={head} onChange={onHeadChange}/>
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Submit;
*/