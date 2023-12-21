import { Route, Routes } from "react-router-dom";
import { PageHeader } from "./layouts/PageHeader";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <div className="mx-auto container">
      <div className="max-w-screen max-h-screen md:mx-0 lg:mx-16 xl:mx-48 2xl:mx-80">
        <div className="top-0 bg-white my-0 mx-0 mx-6 font-sans">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
