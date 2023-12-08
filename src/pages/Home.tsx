import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:3000/post");
    setPost(response.data);
  };

  return (
    <div className="">
      <div className="items-center">
        {posts.map((post, index) => {
          return (
            <div key={post["id"]}>
              <div className="flex flex-col sm:flex-row my-2 mb-4 items-center">
                <div className="flex-shrink-0 mx-0 my-2">
                  <img
                    src=""
                    className={`w-[250px] h-[250px] object-cover rounded-2xl`}
                  />
                </div>
                <div className="md:m-4 sm:m-4 m-0 mt-4 mx-0">
                  <h1 className="text-4xl font-bold mb-2">{post["title"]}</h1>
                  <p className="line-clamp-2 text-slate-500 mb-2 ">
                    {post["content"]}
                  </p>
                  <Button variant="nowarthuran" className="my-2">
                    <Link to={`/post/${post["id"]}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
