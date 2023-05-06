import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div id="blog-page">
      <p>Coming soon... watch this space!</p>
    </div>
  )
}

export default Blog;
