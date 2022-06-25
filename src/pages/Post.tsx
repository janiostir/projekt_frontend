import React, {SyntheticEvent, useState} from "react";
import {UserDto} from "../classes/user.dto";
import {PostDto} from "../classes/post.dto";


const Post = ({post}:{post:PostDto}) => {

    return (
        <>
<h1 style={{textAlign: "center"}}> {post.title}</h1>
            <h3>{post.content}</h3>
        </>
    );
}
export default Post;