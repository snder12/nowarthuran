import { PageHeader } from "./layouts/PageHeader";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { AboutMe } from "./pages/AboutMe";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-screen max-h-screen md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
          <div className="sticky top-0 bg-white my-0 mx-6">
            <PageHeader />
            <div className="font-sans">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/post/:id" element={<Post />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
