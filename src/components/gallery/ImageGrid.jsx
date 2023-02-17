import React, { useState, useCallback, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { ImageContext } from "../../context/ImageContext";

import { motion } from "framer-motion";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import ImageFilter from "./ImageFilter";

const ImageGrid = () => {
  const {
    images,
    searchImage,
    setSearchImage,
    searchImageByTitle,
    selectImage,
    setSelectImage,
    selectImageByCategory,
  } = useContext(ImageContext);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { image, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log("images", images);
  console.log("searchImage", searchImage);
  console.log("searchImageByTitle", searchImageByTitle);
  console.log("selectImage", selectImage);
  console.log("selectImageByCategory", selectImageByCategory);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          My Gallery
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          Search images by title or filter by platform
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchImage(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Images"
              aria-label="Name"
            />
          </div>
          <ImageFilter setSelectImage={setSelectImage} />
        </div>
        {selectImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full">
              <Gallery photos={selectImageByCategory} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={selectImageByCategory.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </motion.div>
        ) : searchImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full">
              <Gallery photos={searchImageByTitle} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={searchImageByTitle.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full">
              <Gallery photos={images} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={images.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </motion.div>
        )}
        {selectImageByCategory.length === 0 && (
          <div className="w-full text-center">Image Not Found</div>
        )}

        {searchImageByTitle.length === 0 && (
          <div className="w-full text-center">Image Not Found</div>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
