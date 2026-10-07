export default function ConferenceInfo() {
  return (
    <section className="bg-white text-center py-12 px-4">
      <div className="max-w-[1175px] mx-auto">
        {/* Logos row */}
        <div className="flex items-center justify-around mb-6">
          <img src="/springer.jpg" alt="Springer" className="h-12 md:h-16" />
          <img src="/ccis.png" alt="CCIS" className="h-10 md:h-14" />
        </div>

        {/* Conference Text */}
        <h2 className="text-blue-600 sm:text-sm md:text-lg font-bold uppercase leading-snug tracking-wide">
          3rd International Conference on Advanced Computing, Machine Learning,<br />
          Robotics and Internet Technologies
        </h2>

        <p className="text-xl font-bold mt-2 text-gray-900">(AMRIT-2025)</p>

        <p className="text-blue-600 text-lg font-semibold mt-1 ">
          22-24 Dec, 2025
        </p>

        <hr className="w-24 border-t-2 border-gray-400 mx-auto my-4" />

        <div className="text-sm md:text-lg leading-relaxed text-gray-800 font-bold">
          <p>Hybrid Mode</p>
          <p>Department of Computer Science</p>
          <p>Assam University, Silchar & Diphu Campus</p>
          <p>Assam, India</p>
        </div>

      </div>
    </section>
  );
}
