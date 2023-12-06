import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between my-3 mx-6">
        <div className="flex gap-4 items-center flex-shrink-0">
          <button className="text-[24px] font-bold italic">
            <a href="/">NOWARTHURAN</a>
          </button>
        </div>
        <div className="sm:flex hidden flex-shrink-0 md:gap-2 font-medium text-2xl">
          <Button variant="ghost">
            <a href="/">Blogs</a>
          </Button>
          <Button variant="ghost">
            <a href="/aboutme">About Me</a>
          </Button>
        </div>
        <div className="sm:flex sm:hidden gap-4 items-center">
          <Button variant="ghost">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
}
