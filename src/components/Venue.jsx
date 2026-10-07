import React from "react";

const Venue = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto">
        <h2 className="text-2xl font-bold mt-2 text-gray-900 text-center">
          VENUE
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-4 justify-center-safe">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow">
              <img
                src="/venue/venue1.jpeg"
                alt="Venue 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow">
              <img
                src="/venue/venue2.jpeg"
                alt="Venue 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
