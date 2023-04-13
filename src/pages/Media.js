import { useEffect } from "react";

import GalleryPhoto from "../components/GalleryPhoto";

function Media() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div id="media-page">
      <h1 id="media-title" className="top">Media</h1>

      <p>Coming soon! Later, you will be able to see my own photo gallery here. For now, please enjoy these stock pictures of cute dogs, courtesy of the dog.ceo <a id="api-link" href="https://dog.ceo/dog-api/" target="_blank" rel="noreferrer">Dog API</a>.</p>
      
      <div className="gallery">
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
      </div>
    </div>
  );
}

export default Media;
