export default function CallForPapers() {
  const track1 = [
    "High Performance Computing",
    "Data Mining",
    "Machine Translation",
    "Computer Vision",
    "Big Data Computing",
    "Cloud Computing",
    "Green Computing",
    "Renewable Energy Technologies",
    "Software Technologies",
  ];

  const track2 = [
    "Artificial Intelligence",
    "Deep Learning",
    "Evolutionary Computing",
    "Optimization Techniques",
    "Bioinformatics",
    "Medical Imaging",
    "Machine Learning Systems",
    "Quantum Machine Learning",
    "Speech & Signal Processing",
  ];

  const track3 = [
    "Control and Automation",
    "Human Computer Interaction",
    "Cognitive Science",
    "Generative AI",
    "Augmented/Virtual Reality",
    "Space and Underwater Robotics",
    "Healthcare Robotics",
    "Human Activity Recognition",
    "Semiconductor Technologies",
  ];

  const track4 = [
    "Quantum Cryptography",
    "Internet of Things",
    "VANET/MANET/WSN",
    "Cyber Security",
    "Cyber Physical Systems",
    "Future Internet",
    "Wireless and Mobile Networks",
    "5G/6G Technologies",
    "Drones Technology",
  ];

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide uppercase">
          Conference Tracks
        </h2>

        <p className="mt-6 text-center text-base opacity-80 max-w-3xl mx-auto">
          Authors are invited to submit research papers that present original
          and unpublished research in the following track areas which include
          and are not limited to:
        </p>

        <div className="overflow-x-auto mt-10">
          <table className="table w-full bg-base-100 rounded-box">
            <thead>
              <tr className="border-0">
                <th className="w-12"></th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track1: Advanced Computing
                </th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track2: Machine Learning
                </th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track3: Robotics
                </th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track4: Internet Technologies
                </th>
              </tr>
            </thead>

            <tbody>
              {track1.map((_, i) => (
                <tr key={i} className="hover:bg-base-200/40">
                  <td className="align-top font-semibold text-base-content/70">
                    {i + 1}
                  </td>
                  <td className="align-top">{track1[i]}</td>
                  <td className="align-top">{track2[i]}</td>
                  <td className="align-top">{track3[i]}</td>
                  <td className="align-top">{track4[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
