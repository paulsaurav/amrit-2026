import React from "react";

const Gallery = () => {
  return (
    <section className="bg-white text-center py-12 px-4">
      <div className="carousel max-w-[1175px] mx-auto">
        {Array.from({ length: 9 }).map((_, index) => {
          const slideId = index + 1;
          const prevSlide = slideId === 1 ? 9 : slideId - 1;
          const nextSlide = slideId === 9 ? 1 : slideId + 1;

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
                <a href={`#slide${prevSlide}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${nextSlide}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
