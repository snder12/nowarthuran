import React from "react";
import { Button } from "../components/Button";
import PostContents from "../data/postcontent.json";

export function Home() {
  return (
    <div className="container">
      <div>
        {PostContents.map((record) => {
          return (
            <div key={record.id}>
              <div className="flex flex-col sm:flex-row m-2 mb-4 items-center">
                <div className="flex-shrink-0 m-2">
                  <img
                    src={record.cover.img}
                    className={`w-[250px] h-[250px] object-cover rounded-2xl`}
                  />
                </div>
                <div className="md:m-4 sm:m-4 m-4">
                  <h1 className="text-4xl font-bold mb-2">{record.title}</h1>
                  <p className="mb-2 line-clamp-3 text-slate-500">
                    {record.content}
                  </p>
                  <Button variant="nowarthuran" className="my-2">
                    Read More
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