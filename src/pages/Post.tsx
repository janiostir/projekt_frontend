import React, {useEffect, useState} from "react";
import {Params, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const Post = () => {

    const[cardData,setCards] = useState([]);
    const[replies,setReplies] = useState([]);
    const { id } = useParams();

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

    if(cardData && replies.length > 0) {
        return (
            <>
                <Card cardData={cardData} hideControls={true}/>

                {replies.map((reply: any, i) => {
                    return <Card cardData={reply} key={i} hideControls={true}/>
                })
                }
            </>
        );
    }

    if(cardData) {
        return (
            <>
                <Card cardData={cardData} hideControls={true}/>
            </>
        );
    }

    return (
        <>

        </>
    );
}

export default Post;