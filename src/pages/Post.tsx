import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateFormatter from "../utils/DateFormatter";
import axios from "axios";

export function Post() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPostInfo();
  }, [id]);

  const getPostInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/post/${id}`);
      setPostInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!postInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-start mb-0">
        <h1 className="text-4xl font-bold">{postInfo["title"]}</h1>
      </div>
      <div className="flex justify-start text-xl mb-2">
        <DateFormatter date={postInfo["createdAt"]} />
      </div>
      <div className="flex justify-start text-2xl">
        {/* TODO: maybe it is not best practice, need to fix */}
        <p
          dangerouslySetInnerHTML={{
            __html: (postInfo["content"] as string).replace(
              /<br\s*\/?>/g,
              "<br/><br/>"
            ),
          }}
        />
      </div>
    </div>
  );
}
