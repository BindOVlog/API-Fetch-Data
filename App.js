import react, { useState } from 'react';
import axios from "axios";
import posts from './components/posts';
import './App.css';

const App = ()=> {

  const [posts,setposts]=useState([]);
  const[loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage,setPostPerPage]=useState(5);

  useState(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
      const res=await axios.get('https://reqres.in/api/users?page=2');
      setposts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);

  const indexOfLastPost=currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
  return (
    <div className="container mt--5">
   <h1 className="text-primary mb-3">my app</h1>

   <posts posts={currentPosts} loading={loading}/>
   </div>
  );
};

export default App;
