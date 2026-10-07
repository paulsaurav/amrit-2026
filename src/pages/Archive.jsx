import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Archive() {
  return (
    <section className="bg-white text-black">
      <Header />
      <div className="mx-auto w-full max-w-[1150px] px-4 mt-14">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
          Previous Conferences
        </h1>
        <p className="mt-3 text-center text-base md:text-lg text-black/70 max-w-3xl mx-auto">
          Explore our legacy of knowledge sharing and innovation through past
          conference archives
        </p>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* 2024 */}
          <a
            href="https://amrit2024.amritconferences.in/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl p-6 md:p-8 shadow-lg bg-gradient-to-r from-[#EAD9FF] via-[#DCEBFF] to-[#CFE1FF]
                       hover:shadow-xl transition"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/80 text-sm font-semibold">
              2024
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">AMRIT 2024</h2>
            <p className="mt-3 text-black/80">
              The most recent conference featuring cutting-edge research and
              innovation
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="underline underline-offset-4">Visit Archive</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* 2023 */}
          <a
            href="https://amrit2023.amritconferences.in/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl p-6 md:p-8 shadow-lg bg-gradient-to-r from-[#FFF0C9] via-[#FFE6C8] to-[#FAD7E8]
                       hover:shadow-xl transition"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/80 text-sm font-semibold">
              2023
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">AMRIT 2023</h2>
            <p className="mt-3 text-black/80">
              Foundational conference that set the standard for future events
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="underline underline-offset-4">Visit Archive</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Coming soon */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold">
            More Conferences Coming Soon
          </h3>
          <p className="mt-3 max-w-3xl mx-auto text-black/70">
            We&apos;re constantly expanding our archives as we continue our
            journey of knowledge exchange. Stay tuned for updates on future
            conferences!
          </p>
        </div>
      </div>
      <br /><br />
      <Footer />
    </section>
  );
}