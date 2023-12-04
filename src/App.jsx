import "./index.css";
import { PageHeader } from "./layouts/PageHeader";
import { Content } from "./layouts/Content";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col mx-0 sm:mx-0 md:mx-48 lg:mx-64 xl:80 2xl:mx-96">
      <div className="sticky top-0 bg-white mx-0 my-0">
        <PageHeader />
      </div>
      <div className="mx-0 font-sans">
        <Content />
      </div>
    </div>
  );
}
