import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 my-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
          <p className="text-[24px] font-bold italic">NOWARTHURAN</p>
        </div>
        <div className="sm:flex hidden flex-shrink-0 md:gap-2 font-medium text-2xl">
          <Button variant="ghost">
            <p>Blogs</p>
          </Button>
          <Button variant="ghost">
            <p>About Me</p>
          </Button>
        </div>
        <div className="flex sm:hidden gap-4 items-center">
          <Button variant="ghost">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
}
