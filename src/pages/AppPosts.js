import React, {useState,useEffect} from 'react'
import PostService from '../services/PostService'
import SinglePost from './SinglePost';

function AppPosts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts= async () => {
          const data = await PostService.getAll();
    
          setPosts(data);
        };
        getPosts();
      }, []);

    return (
        <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <SinglePost
            key={post.id}
            title={post.title}
            text={post.text}  
          />
        ))}
      </ul>
    </div>
  );
}

export default AppPosts