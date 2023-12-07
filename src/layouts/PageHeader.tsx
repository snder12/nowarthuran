import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 my-3 justify-between items-center">
        <div className="justify-center">
          <button className="text-[24px] sm:text-[24px] md:text-[24px] lg:text-[36px] font-bold italic">
            <a href="/">NOWARTHURAN</a>
          </button>
        </div>
        <div className="sm:flex hidden flex-shrink-0 md:gap-2 font-medium text-[18px] sm:text-[18px] md:text-[18px] lg:text-[24px]">
          <Button variant="ghost">
            <a href="/post">Post</a>
          </Button>
          <Button variant="ghost">
            <a href="/">Blogs</a>
          </Button>
          <Button variant="ghost">
            <a href="/aboutme">About Me</a>
          </Button>
        </div>
        <div className="sm:flex shrink sm:hidden gap-0">
          <Button variant="ghost">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
}
