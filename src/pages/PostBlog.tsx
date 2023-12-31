import { useState, FormEvent } from "react";

export function PostBlog() {
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/postblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify({
          title: formTitle,
          content: formContent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }

      // Handle success, e.g., show a success message or redirect
      alert("Blog saved successfully");
    } catch (error) {
      console.error("Error saving blog:", error);
      // Handle error, e.g., show an error message to the user
      alert("Failed to save blog");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Post New Blog
          </h2>
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Write your title here.."
                    onChange={(e) => setFormTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={12}
                  className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Write your content here.."
                  onChange={(e) => setFormContent(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
