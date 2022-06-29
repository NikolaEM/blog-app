import PostService from "../services/PostService";
import {useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

function SinglePost({title,text}){
const {id} = useParams;


   return(
    <li>
    <span>Title: {title}</span><Link to={`/post/${id}`}>View Post</Link>
    <span>Text: {text}</span>
 
  </li>
);
}

export default SinglePost