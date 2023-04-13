import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div id="blog-page">
      <h1 className="top">Blog</h1>
      <p>Coming soon...</p>
    </div>
  )
}

export default Blog;
