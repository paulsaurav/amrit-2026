import React, { useRef } from "react";

const TOTAL_IMAGES = 17;

const Gallery = () => {
  const carouselRef = useRef(null);

  // Scroll only the carousel horizontally; anchor links (#slideN) would
  // scroll the whole page to bring the slide into view.
  const goToSlide = (slideId) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({
      left: carousel.clientWidth * (slideId - 1),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white text-center py-12 px-4">
      <div ref={carouselRef} className="carousel max-w-[1175px] mx-auto">
        {Array.from({ length: TOTAL_IMAGES }).map((_, index) => {
          const slideId = index + 1;
          const prevSlide = slideId === 1 ? TOTAL_IMAGES : slideId - 1;
          const nextSlide = slideId === TOTAL_IMAGES ? 1 : slideId + 1;

          return (
            <div
              key={slideId}
              id={`slide${slideId}`}
              className="carousel-item relative w-full"
            >
              <img
                src={`/gallery/${slideId}.jpeg`}
                alt={`Slide ${slideId}`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                  type="button"
                  onClick={() => goToSlide(prevSlide)}
                  className="btn btn-circle"
                  aria-label="Previous slide"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(nextSlide)}
                  className="btn btn-circle"
                  aria-label="Next slide"
                >
                  ❯
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
