import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function Post() {
  const [postInfo, setPostInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const response = await axios.get(`http://localhost:3000/post/${id}`);
    setPostInfo(response.data);
  };

  if (!postInfo) return "";

  return (
    <div className="">
      <div className="flex justify-start">
        <h1 className="text-[36px] font-bold">{postInfo["title"]}</h1>
      </div>
      <div>
        <p>{postInfo["content"]}</p>
      </div>
    </div>
  );
}
