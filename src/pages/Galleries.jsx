import ImageGrid from "../components/gallery/ImageGrid";
import { ImageProvider } from "../context/ImageContext";

const Gallery = () => {
  return (
    <ImageProvider>
      <div className="container mx-auto">
        <ImageGrid />
      </div>
    </ImageProvider>
  );
};

export default Gallery;
