import { useState, createContext } from "react";
import { Images } from "../data/imagesData";

// Create images context
export const ImageContext = createContext();

// Create the images context provider
export const ImageProvider = (props) => {
  const [images, setImages] = useState(Images);
  const [searchImage, setSearchImage] = useState("");
  const [selectImage, setSelectImage] = useState("");

  // Search images by project title
  const searchImageByTitle = images.filter((item) => {
    const result = item?.type.toLowerCase().includes(searchImage.toLowerCase())
      ? item
      : searchImage === ""
      ? item
      : "";
    return result;
  });

  // Select images by project category
  const selectImageByCategory = images.filter((item) => {
    let system = item?.system.charAt(0).toUpperCase() + item?.system.slice(1);
    return system.includes(selectImage);
  });

  return (
    <ImageContext.Provider
      value={{
        images,
        setImages,
        searchImage,
        setSearchImage,
        searchImageByTitle,
        selectImage,
        setSelectImage,
        selectImageByCategory,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};
