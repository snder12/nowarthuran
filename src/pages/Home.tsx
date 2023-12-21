import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import DateFormatter from "../utils/DateFormatter";
import axios from "axios";

export function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/post");
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="items-center">
      {posts.map((post, index) => {
        return (
          <div key={post["id"]}>
            <div className="flex flex-col sm:flex-row my-2 mb-4 items-center">
              <div className="md:m-0 sm:m-0 m-0 mx-0">
                <Link to={`/post/${post["id"]}`}>
                  <h1 className="hover:underline text-4xl font-bold">
                    {post["title"]}
                  </h1>
                </Link>
                <div className="text-xl mb-2">
                  <DateFormatter date={post["createdAt"]} />
                </div>
                <p className="text-2xl line-clamp-2 text-slate-500 mb-0">
                  {post["content"]}
                </p>
                <Button variant="nowarthuran" className="my-4 text-xl">
                  <Link to={`/post/${post["id"]}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
