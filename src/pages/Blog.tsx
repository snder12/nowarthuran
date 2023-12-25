import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateFormatter from "../utils/DateFormatter";
import axios from "axios";

export function Blog() {
  // TODO: Need update!
  // renaming Post.tsx to Blog.tsx on 05:10 24-12-2023 UTC GMT+7
  // variable postInfo need to change to blogInfo below or not?
  const [blogInfo, setBlogInfo] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getBlogInfo();
  }, [slug]);

  const getBlogInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/${slug}`);
      setBlogInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!blogInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-2 pb-5 break-words whitespace-pre-line">
      <div className="flex justify-start mb-0">
        <h1 className="font-bold text-2xl">{blogInfo["title"]}</h1>
      </div>
      <div className="flex justify-start mb-2 text-xs">
        <DateFormatter date={blogInfo["createdAt"]} />
      </div>
      <div className="flex justify-start text-base">
        <p>{blogInfo["content"]}</p>
      </div>
    </div>
  );
}
