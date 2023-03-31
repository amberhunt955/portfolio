import { useState, useMemo } from "react";
import { getDogPhoto } from "../services/dog-api";

function GalleryPhoto() {
  const [dogPhoto, setDogPhoto] = useState(null);

  useMemo(() => {
    console.log("useMemo triggered");

    const fetchData = async () => {
      const dogPhoto = await getDogPhoto();
      setDogPhoto(dogPhoto.message);
      console.log(dogPhoto.message);
    };

    fetchData();
  }, []);

  const loaded = () => <img className="gallery-image" src={dogPhoto} alt="cute dog"/>;

  const loading = () => <p className="gallery-image">Loading...</p>;

  return dogPhoto ? loaded() : loading();

}

export default GalleryPhoto;
