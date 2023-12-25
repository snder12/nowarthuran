import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import DateFormatter from "../utils/DateFormatter";
import axios from "axios";

export function Home() {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blog");
      setBlog(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="items-center">
      {blogs.map((blog) => {
        return (
          <div className="break-words" key={blog["id"]}>
            <div className="flex flex-col sm:flex-row my-2 mb-4 items-center">
              <div className="md:m-0 sm:m-0 m-0 mx-0">
                <Link to={`/blog/${blog["slug"]}`}>
                  <h1 className="hover:underline text-2xl font-bold">
                    {blog["title"]}
                  </h1>
                </Link>
                <div className="text-xs mb-2">
                  <DateFormatter date={blog["createdAt"]} />
                </div>
                <p className="text-base line-clamp-2 text-slate-500 mb-0">
                  {blog["content"]}
                </p>
                <Button variant="nowarthuran" className="my-4 text-base">
                  <Link to={`/blog/${blog["slug"]}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
