import { useState, useEffect } from "react";
import { getDogPhoto } from "../services/dog-api";

function GalleryPhoto() {
  const [dogPhoto, setDogPhoto] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered");

    const fetchData = async () => {
      const dogPhoto = await getDogPhoto();
      setDogPhoto(dogPhoto.message);
      console.log(dogPhoto.message);
    };

    fetchData();
  }, []);

  const loaded = () => <img src={dogPhoto} alt="dog stock photo" />;

  const loading = () => <p>Image loading...</p>;

  return dogPhoto ? loaded() : loading();
}

export default GalleryPhoto;
