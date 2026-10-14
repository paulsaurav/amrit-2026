import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const tracks = [
  "TRACK1: ADVANCED COMPUTING",
  "TRACK2: MACHINE LEARNING",
  "TRACK3: COMPUTING AND CRYPTOGRAPHY",
  "TRACK4: INTERNET TECHNOLOGIES",
];

// Each row lists one topic per track, in the same order as `tracks`.
const topics = [
  ["High Performance Computing", "Artificial Intelligence", "Elliptic Curve Cryptography (ECC)", "Computer Networks"],
  ["Data Mining", "Deep Learning", "Post-Quantum Cryptography (PQC)", "Internet of Things"],
  ["Machine Translation", "Evolutionary Computing", "Cognitive Science", "VANET/MANET/Inter Vehicular Networks"],
  ["Computer Vision", "Optimization Techniques", "Quantum Machine Learning", "Cyber Security Systems"],
  ["Big Data Computing", "Explainable AI", "Homomorphic Encryption", "Sensor Technologies"],
  ["Cloud Computing", "Medical & Healthcare Applications", "Cryptography in Blockchain", "Future Internet"],
  ["Bioinformatics & Genetic Engineering", "Machine Learning Systems", "Cryptography in Network Security", "Wireless and Mobile Networks"],
  ["Renewable Energy Technologies", "Generative AI", "Cryptanalysis, Vulnerabilities & Attacks", "5G/6G Technologies"],
  ["Software Technologies", "Large Language Models (LLMs)", "Lattice based Cryptography", "Drones Technology"],
];

const ConferenceTracks = () => {
  return (
    <><Helmet>
        <meta charSet="utf-8" />
        <title>Call For Paper|Amrit Conferences</title>
        <link rel="canonical" href="https://amrit2026.amritconferences.in/call-for-paper" />
        <meta
          name="Authors are invited to submit research papers that present original
            and unpublished research in the following track areas which include
            and are not limited to: ADVANCED COMPUTING, MACHINE LEARNING, COMPUTING AND CRYPTOGRAPHY, INTERNET TECHNOLOGIES"
          content="Amrit-2026 Conference"
        />
      </Helmet>
      <Header />
      
      <section className="bg-white text-gray-800 py-52 px-4">
        <div className="max-w-[1175px] mx-auto">
          <h2 className="text-2xl font-bold mt-2 text-gray-900 text-center">
            CONFERENCE TRACKS
          </h2>
          <br />
          <p>
            Authors are invited to submit research papers that present original
            and unpublished research in the following track areas which include
            and are not limited to:
          </p>
          <br />
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white">
            <table className="table bg-white">
              <thead>
                <tr>
                  <th></th>
                  {tracks.map((t) => (
                    <th key={t} className="text-gray-800">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topics.map((row, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    {row.map((topic) => (
                      <td key={topic}>{topic}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-16 text-gray-900 text-center">
            PREVIOUS PUBLICATIONS
          </h2>
          <br />
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white">
            <table className="table bg-white">
              <thead>
                <tr>
                  <th className="text-gray-800">Edition</th>
                  <th className="text-gray-800">Publication Title &amp; Series</th>
                  <th className="text-gray-800">Details &amp; Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whitespace-nowrap">
                    <span className="font-semibold">AMRIT 2023</span>
                    <br />
                    (1st Edition)
                  </td>
                  <td>
                    Advanced Computing, Machine Learning, Robotics and Internet
                    Technologies
                    <br />
                    <span className="font-semibold">Series:</span> Communications
                    in Computer and Information Science (CCIS, Volume 1953)
                  </td>
                  <td>
                    Includes 47 accepted papers (20 full, 27 short) chosen from
                    110 submissions.
                    <br />
                    <a className="link link-primary" href="https://link.springer.com/book/10.1007/978-3-031-47221-3" target="_blank" rel="noopener noreferrer">Volume 1</a>
                    {" | "}
                    <a className="link link-primary" href="https://link.springer.com/book/10.1007/978-3-031-47224-4" target="_blank" rel="noopener noreferrer">Volume 2</a>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">
                    <span className="font-semibold">AMRIT 2024</span>
                    <br />
                    (2nd Edition)
                  </td>
                  <td>
                    Advanced Computing, Machine Learning, Robotics and Internet
                    Technologies
                    <br />
                    <span className="font-semibold">Series:</span> Advances in
                    Computer Science Applications and Research (ACSAR, Volume 7)
                  </td>
                  <td>
                    A two-volume set comprising 61 papers (47 full, 14 short)
                    selected out of 274 initial submissions.
                    <br />
                    <a className="link link-primary" href="https://link.springer.com/book/9783032317810" target="_blank" rel="noopener noreferrer">Volume 1</a>
                    {" | "}
                    <a className="link link-primary" href="https://link.springer.com/book/9783032317773" target="_blank" rel="noopener noreferrer">Volume 2</a>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">
                    <span className="font-semibold">AMRIT 2025</span>
                    <br />
                    (3rd Edition)
                  </td>
                  <td>
                    Special Issue Selection
                    <br />
                    <span className="font-semibold">Journal:</span> Innovations
                    in Systems and Software Engineering: A NASA Journal
                    <br />
                    and Springer ACSAR Series
                  </td>
                  <td>
                    40 papers out of 245 accepted for publication in Springer
                    ACSAR Series, and a few quality papers were selected for a
                    Special Issue of a Springer journal.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConferenceTracks;
