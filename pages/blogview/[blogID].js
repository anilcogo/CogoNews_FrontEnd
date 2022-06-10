import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();
  //console.log(router)
  const { blogID } = router.query;
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if(!router.isReady) return;
    try {
      axios
        .get(`http://localhost:3000/showingid/${blogID}`)
        .then((response) => {
          console.log(response)
          let { data } = response;
          setBlog(data);
        });
    }catch (err) {
      console.log(err);
    }
  }, [router.isReady]);
  if (!blog) return <div className="loading">Loading...</div>;

  return (
    <>
    <div className="blogdiv">
    <h2 className="blog-title">{blog.title}</h2>
      <img className="blogimage" src={blog.urlToImage}/>
      <div className="discription">
      <b>Description :</b> {blog.description}
      </div>
      <div className="blogcontent">
      <b>Content :</b>{blog.content}
      </div>
      <div className="publishedat">
        <b>Published at :</b>{blog.publishedAt}
      </div>
      <div className="author">
        <b>author :</b>{blog.author}
      </div>
      <div className="blogrecomendation">
      <b>Link to the original source :</b>
      <a href={blog.url} style={{"color":"black", "backgroundColor":"white","border":"2px solid black", "margin":"5px","border-radius": "30px"}}>Original source</a>
      </div>
    </div>
    </>
  );
};

export default Post;