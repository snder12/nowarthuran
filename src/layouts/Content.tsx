import React from "react";
import { Button } from "../components/Button";

export function Content() {
  return (
    <>
      <div className="container hover:bg-grey-200">
        <div>
          <div className="flex flex-col sm:flex-row m-2 items-center">
            <div className="flex-shrink-0 bg-gray-200 w-[250px] h-[250px] m-2 rounded-2xl">
              IMAGE
            </div>
            <div className="m-2">
              <h1 className="text-4xl font-bold mb-2">TITLE</h1>
              <p className="mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                dolore explicabo repellat voluptatibus minima, perspiciatis
                nostrum laudantium similique necessitatibus consequuntur sit
                veniam totam velit rem debitis perferendis ipsa odit omnis.
              </p>
              <Button variant="nowarthuran" className="my-2">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
