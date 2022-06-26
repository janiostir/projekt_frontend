import React, {SyntheticEvent, useEffect, useState} from "react";
import {Params, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const styleTextArea = {
    height:"100%"
}

const Post = () => {

    const[cardData,setCards] = useState([]);
    const[replies,setReplies] = useState([]);
    const { id } = useParams();

    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[categories, setCategories] = useState([]);
    const[categorySelected, setCategorySelected] = useState(1);

    const loadPosts = async () => {
        const res = await axios.get('http://localhost:8080/post/'+id, {withCredentials: true});
        if (res.status == 200){
            setCards(res.data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const loadReplies = async () => {
        const res = await axios.get('http://localhost:8080/post/replies/' + id, {withCredentials: true});
        if (res.status == 200){
            setReplies(res.data);
        }
    }

    useEffect(() => {
        loadReplies();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content,
            "reply_id":id
        }

        const res = await axios.post('http://localhost:8080/post/reply', data, { withCredentials: true });

        if(res.status == 201){
            setRedirect(true);
        }

    }

    if(redirect){
        window.location.reload();
        //return <Navigate to={'/thread/' + id}/>
    }

    if(cardData && replies.length > 0) {
        return (
            <>
                <Card cardData={cardData} hideControls={true}/>

                {replies.map((reply: any, i) => {
                    return <Card cardData={reply} key={i} hideControls={true}/>
                })
                }

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Title"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Content" onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                        <label htmlFor="floatingContent">Content</label>

                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>

            </>
        );
    }

    if(cardData) {
        return (
            <>
                <Card cardData={cardData} hideControls={true}/>

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="naslov"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Naslov</label>
                    </div>
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Vnesi vsebino" onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                        <label htmlFor="floatingContent">Vsebina</label>

                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>

            </>
        );
    }

    return (
        <>

        </>
    );
}

export default Post;