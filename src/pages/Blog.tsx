import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateFormatter from "../utils/DateFormatter";
import axios from "axios";

export function Blog() {
  // TODO: Need update!
  // renaming Post.tsx to Blog.tsx on 05:10 24-12-2023 UTC GMT+7
  // variable postInfo need to change to blogInfo below or not?
  const [blogInfo, setBlogInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getBlogInfo();
  }, [id]);

  const getBlogInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/${id}`);
      setBlogInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!blogInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-2">
      <div className="flex justify-start mb-0">
        <h1 className="font-bold text-4xl">{blogInfo["title"]}</h1>
      </div>
      <div className="flex justify-start mb-2 text-xs">
        <DateFormatter date={blogInfo["createdAt"]} />
      </div>
      <div className="flex justify-start text-base">
        {/* TODO: maybe it is not best practice, need to fix */}
        <p
          dangerouslySetInnerHTML={{
            __html: (blogInfo["content"] as string).replace(
              /<br\s*\/?>/g,
              "<br/><br/>"
            ),
          }}
        />
      </div>
    </div>
  );
}
