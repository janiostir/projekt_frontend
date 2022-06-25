import React, {SyntheticEvent, useEffect, useState} from "react";
import {UserDto} from "../classes/user.dto";
import {PostDto} from "../classes/post.dto";
import {useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";


const Post = () => {

    const[cardData,setCards] = useState([]);

    const { id } = useParams();

    const loadCards = async () => {
        const res = await axios.get('http://localhost:8080/post/'+id,{withCredentials: true});
        console.log(res);
        if (res.status === 200) {
            console.log(res.data);
            setCards(res.data);
        }
    }

    useEffect(()=>{
        loadCards();
    },[]);

    if(cardData) {
        return (
            <>
                <Card cardData={cardData} />
            </>
        );
    }

    return (
        <>
            <h1>Ni objav</h1>
        </>
    );
}
export default Post;