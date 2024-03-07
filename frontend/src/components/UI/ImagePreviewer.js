import { useEffect, useState } from "react";
import classes from "../../Custom.module.css";

export default function ImagePreviewer({ imageData, hasError }) {
  const [pickedImage, setPickedImage] = useState(null);

  useEffect(() => {
    if (!imageData) {
      setPickedImage(null);
      return;
    }
    setPickedImage(imageData);
  }, [imageData]);

  return (
    <div
      className={`${hasError && !imageData ? "border-danger" : ""} ${
        classes.preview
      }`}
    >
      {!pickedImage && <p className="text-muted m-0">No Image</p>}
      {pickedImage && (
        <img src={pickedImage} className="img-fluid object-fit-cover h-100" />
      )}
    </div>
  );
}
