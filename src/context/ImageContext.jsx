import { useState, createContext } from "react";
import { Images } from "../data/imagesData";

// Create projects context
export const ImageContext = createContext();

// Create the projects context provider
export const ImageProvider = (props) => {
  const [images, setImages] = useState(Images);
  const [searchImage, setSearchImage] = useState("");
  const [selectImage, setSelectImage] = useState("");

  // Search projects by project title
  const searchImageByTitle = images.filter((item) => {
    const result = item?.type?.toLowerCase().includes(searchImage.toLowerCase())
      ? item
      : searchImage === ""
      ? item
      : "";
    return result;
  });

  // Select projects by project category
  const selectImageByCategory = images.filter((item) => {
    let system = item.system.charAt(0).toUpperCase() + item.system.slice(1);
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
