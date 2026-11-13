import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const templates = [
  {
    name: "Microsoft Word Template",
    file: "Microsoft+Word+Proceedings+Template+ZIP.zip",
  },
  {
    name: "LaTeX Template",
    file: "LaTeX2e+Proceedings+Template+ZIP.zip",
  },
];

const sections = [
  {
    title: "Originality",
    points: [
      "Papers submitted to AMRIT 2026 must be original and must not have been published elsewhere or be under review at another conference or journal.",
      "All submissions are checked for plagiarism. Papers with a high similarity score will be rejected without review.",
      "Authors must properly cite all sources, including their own previously published work.",
    ],
  },
  {
    title: "Fairness of the Review Process",
    points: [
      "Every submission is evaluated on its originality, technical quality, relevance to the conference tracks and clarity of presentation.",
      "Reviews are conducted by members of the technical program committee and external experts in the relevant field.",
      "Decisions are made without regard to the authors' gender, race, religion, nationality, institution or seniority.",
      "Each paper receives a fair and impartial assessment, and authors are given constructive feedback with the decision.",
    ],
  },
  {
    title: "Conflict of Interest",
    points: [
      "Authors must declare any conflict of interest with committee members or reviewers when submitting through the CMT portal.",
      "Reviewers and committee members do not review papers where they have a conflict of interest, such as papers by colleagues from the same institution, recent collaborators, students or advisors.",
    ],
  },
  {
    title: "Authorship and Ethics",
    points: [
      "Everyone listed as an author must have made a significant contribution to the work and must agree to the submission.",
      "The author list cannot be changed after the paper is accepted.",
      "Fabrication or falsification of data, duplicate submission and plagiarism are treated as serious misconduct and may result in rejection or withdrawal of the paper.",
      "Use of AI tools in preparing the manuscript should be disclosed. AI tools cannot be listed as authors, and the authors remain fully responsible for the content.",
    ],
  },
  {
    title: "Manuscript Preparation",
    points: [
      "Papers must be prepared using the official template provided below (Word or LaTeX).",
      "Submissions must be in PDF format and written in English.",
      "Papers that do not follow the template or the formatting guidelines may be rejected without review.",
    ],
  },
  {
    title: "Presentation and Registration",
    points: [
      "At least one author of each accepted paper must register for the conference and present the paper.",
      "Accepted papers that are not registered or not presented will not be included in the proceedings.",
    ],
  },
];

export default function ForAuthors() {
  return (
    <section className="bg-white text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>For Authors|Amrit Conferences</title>
        <link rel="canonical" href="https://amrit2026.amritconferences.in/for-authors" />
      </Helmet>
      <Header />
      <div className="mx-auto w-full max-w-[1050px] px-4 mt-14">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
          For Authors
        </h1>
        <p className="mt-4">
          AMRIT 2026 is committed to a fair, transparent and ethical publication process.
          Please read the following guidelines before submitting your paper.
        </p>

        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="mt-10 text-xl font-extrabold uppercase">{section.title}</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* TEMPLATES */}
        <h2 className="mt-12 text-xl font-extrabold uppercase">Paper Templates</h2>
        <p className="mt-3">Download the template and prepare your manuscript in the given format.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          {templates.map((t) => (
            <a
              key={t.file}
              href={`/template/${encodeURIComponent(t.file)}`}
              download={t.file}
              className="btn btn-primary uppercase shadow-md"
            >
              Download {t.name}
            </a>
          ))}
        </div>

        {/* SUBMIT */}
        <h2 className="mt-12 text-xl font-extrabold uppercase">Submit Your Paper</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="mt-3">Papers are submitted through the Microsoft CMT Portal.</p>
          <a
            href="https://cmt3.research.microsoft.com/AMRIT2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success uppercase shadow-md mt-4"
          >
            Paper Submission
          </a>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </section>
  );
}
