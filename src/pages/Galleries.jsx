import ImageGrid from "../components/gallery/ImageGrid";
import { ImageProvider } from "../context/ImageContext";

import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>MY GALLERY</title>
        <meta
          name="description"
          content="This is a website that gathers Thanachit's works and talents."
        />
        <meta
          name="google-site-verification"
          content="2HSSIHsakNFao9y4Sywcx-siP9G1a1ccev9hdetKkak"
        />
      </Helmet>
      <ImageProvider>
        <div className="container mx-auto">
          <ImageGrid />
        </div>
      </ImageProvider>
    </>
  );
};

export default Gallery;
