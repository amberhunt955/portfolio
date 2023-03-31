import GalleryPhoto from "../components/GalleryPhoto";

function Media() {
  return (
    <div id="media-page">
      <h1>Media Page</h1>
      <p>Later, you will be able to see my own photo gallery here. For now, please enjoy pictures of cute dogs!</p>
      <div className="gallery">
        <GalleryPhoto />
      </div>
    </div>
  );
}

export default Media;
