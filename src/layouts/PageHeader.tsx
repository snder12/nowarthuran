import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";

export function PageHeader() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="sticky bg-white py-1 top-0 z-50">
        <div className="flex gap-10 lg:gap-20 my-3 justify-between items-center">
          <div className="justify-center">
            <button className="min-[140px]:text-[12px] min-[280px]:text-[18px] min-[380px]:text-[24px] sm:text-[36px] md:text-[36px] lg:text-[36px] font-bold italic">
              <a href="/">NOWARTHURAN</a>
            </button>
          </div>
          <div className="sm:flex hidden flex-shrink-0 md:gap-2 font-medium min-[140px]:text-[6px] min-[280px]:text-[12px] min-[380px]:text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            <Button variant="ghost">
              <a href="/">Blogs</a>
            </Button>
            <Button variant="ghost">
              <a href="/aboutme">About Me</a>
            </Button>
          </div>
          <div className="sm:flex shrink sm:hidden gap-0">
            <Button variant="ghost" onClick={handleButtonClick}>
              {isMenuVisible ? <Menu /> : <Menu />}
            </Button>
            {isMenuVisible && (
              <>
                <div
                  className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50"
                  onClick={handleButtonClick}
                ></div>
                <div className="fixed top-0 right-0 flex items-center justify-center z-50">
                  <div className="flex flex-col bg-white rounded shadow-xl p-2 mx-4 my-2 items-end">
                    <Button variant="ghost">
                      <X onClick={handleButtonClick} />
                    </Button>
                    <Button variant="ghost">
                      <a href="/">Blogs</a>
                    </Button>
                    <Button variant="ghost">
                      <a href="/aboutme">About Me</a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
