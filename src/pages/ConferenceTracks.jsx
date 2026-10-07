import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ConferenceTracks = () => {
  return (
    <><Helmet>
        <meta charSet="utf-8" />
        <title>Call For Paper|Amrit Conferences</title>
        <link rel="canonical" href="https://amrit2025.amritconferences.in/call-for-paper" />
        <meta
          name="Authors are invited to submit research papers that present original
            and unpublished research in the following track areas which include
            and are not limited to: ADVANCED COMPUTING, MACHINE LEARNING, ROBOTICS, INTERNET TECHNOLOGIES"
          content="Amrit-2025 Conference"
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
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-gray-800">TRACK1: ADVANCED COMPUTING</th>
                  <th className="text-gray-800">TRACK2: MACHINE LEARNING</th>
                  <th className="text-gray-800">TRACK3: ROBOTICS</th>
                  <th className="text-gray-800">
                    TRACK4: INTERNET TECHNOLOGIES
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>High Performance Computing</td>
                  <td>Artificial Intelligence</td>
                  <td>Control and Automation</td>
                  <td>Quantum Cryptography</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Data Mining</td>
                  <td>Deep Learning</td>
                  <td>Human Computer Interaction</td>
                  <td>Internet of Things</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Machine Translation</td>
                  <td>Evolutionary Computing</td>
                  <td>Cognitive Science</td>
                  <td>VANET/MANET/WSN</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>4</td>
                  <td>Computer Vision</td>
                  <td>Optimization Techniques</td>
                  <td>Generative AI</td>
                  <td>Cyber Security</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>5</td>
                  <td>Big Data Computing</td>
                  <td>Bioinformatics</td>
                  <td>Augmented/Virtual Reality</td>
                  <td>Cyber Physical Systems</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>6</td>
                  <td>Cloud Computing</td>
                  <td>Medical Imaging</td>
                  <td>Space and Underwater Robotics</td>
                  <td>Future Internet</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>7</td>
                  <td>Green Computing</td>
                  <td>Machine Learning Systems</td>
                  <td>Healthcare Robotics</td>
                  <td>Wireless and Mobile Networks</td>
                </tr>
                {/* row 8 */}
                <tr>
                  <td>8</td>
                  <td>Renewable Energy Technologies</td>
                  <td>Quantum Machine Learning</td>
                  <td>Human Activity Recognition</td>
                  <td>5G/6G Technologies</td>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>9</td>
                  <td>Software Technologies</td>
                  <td>Speech & Signal Processing</td>
                  <td>Semiconductor Technologies</td>
                  <td>Drones Technology</td>
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
