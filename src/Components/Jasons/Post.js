import React from 'react';
import { useState, useEffect } from 'react';
import './Post.css'

const Post = () => {
    const [allPosts, setPost] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1> Total Post: {allPosts.length}</h1>
            <div className='postContainer'>
            {
            allPosts.map((post, index) => <DisplayPost key={index} title={post.title} body={post.body}></DisplayPost>)
            }
            </div>
        </div>
    );
};

function DisplayPost(props){
    console.log(props)
    return(
        <div className='postBox'>
            <h3>{props.title}</h3>
            <p> {props.body}</p>
        </div>
    )
}

export default Post;