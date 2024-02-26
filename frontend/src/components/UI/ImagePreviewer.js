import { useEffect, useState } from "react";
import classes from "../../Custom.module.css";

export default function ImagePreviewer({ imageData }) {
  const [pickedImage, setPickedImage] = useState(null);

  useEffect(() => {
    if (!imageData) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(imageData);
  }, [imageData]);

  return (
    <div className={classes.preview}>
      {!pickedImage && <p className="text-muted m-0">No Image</p>}
      {pickedImage && (
        <img src={pickedImage} className="img-fluid object-fit-cover" />
      )}
    </div>
  );
}
