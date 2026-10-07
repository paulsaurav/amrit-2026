import React from 'react';

const CMT = () => {
  return (
    <section className="bg-white px-4 py-56 relative overflow-hidden">
      <div className="max-w-[1175px] mx-auto flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f5b] uppercase tracking-wide mb-6">
          CMT Acknowledgment
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-600 font-medium max-w-3xl text-left md:text-center">
          
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
          This service was provided for free by Microsoft and they bore all expenses, including costs for 
          Azure cloud services as well as for software development and support.
        </p>
      </div>

      {/* Background shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#f5f9ff] transform -skew-y-2 origin-bottom"></div>
    </section>
  );
};

export default CMT;
