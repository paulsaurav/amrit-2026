import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PaperSubmission() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Paper Submission|Amrit Conferences</title>
        <link rel="canonical" href="https://amrit2026.amritconferences.in/paper-submission" />
      </Helmet>
      <Header />
      <section className="bg-white text-gray-800 py-52 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-900">
            Paper Submission
          </h1>
          <p className="mt-6 text-lg">
            The paper submission portal for AMRIT 2026 will be created soon.
          </p>
          <p className="mt-2 opacity-80">
            Please check back later for submission details.
          </p>
          <Link to="/call-for-paper" className="btn btn-primary mt-10">
            View Call for Paper
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
