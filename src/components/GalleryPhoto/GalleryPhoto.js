import { useState, useMemo } from "react";

// data
import { getDogPhoto } from "../../services/dog-api";

function GalleryPhoto() {
  const [dogPhoto, setDogPhoto] = useState(null);

  useMemo(() => {
    const fetchData = async () => {
      const dogPhoto = await getDogPhoto();
      setDogPhoto(dogPhoto.message);
    };

    fetchData();
  }, []);

  const loaded = () => <img className="gallery-image" src={dogPhoto} alt="cute dog"/>;

  const loading = () => <p className="gallery-image">Loading...</p>;

  return dogPhoto ? loaded() : loading();

}

export default GalleryPhoto;
