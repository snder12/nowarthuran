import "./index.css";
import { PageHeader } from "./layouts/PageHeader";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { AboutMe } from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="max-h-screen flex flex-col mx-0 sm:mx-0 md:mx-48 lg:mx-64 xl:80 2xl:mx-96">
        <div className="sticky top-0 bg-white mx-0 my-0">
          <PageHeader />
          <div className="mx-6 font-sans">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
