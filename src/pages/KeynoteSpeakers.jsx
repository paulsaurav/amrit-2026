import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SPEAKERS = [
  {
    name: "Prof. Rajkumar Buyya",
    roleLinkText:
      "Director, Cloud Computing and Distributed Systems (CLOUDS) Laboratory",
    org: "The University of Melbourne, Australia",
    bio:
      "Dr. Rajkumar Buyya is a Redmond Barry Distinguished Professor and Director of the Cloud Computing and Distributed Systems (CLOUDS) Laboratory at the University of Melbourne, Australia. He is recognized as a Web of Science Highly Cited Researcher and has received numerous awards including the IEEE Technical Committee on Scalable Computing Medal for Excellence in Scalable Computing.",
    researchAreas:
      "Cloud computing, distributed systems, big data, and software platforms",
    image: "/speakers/rkb.png",
  },
  {
    name: "Prof. Mike Hinchey",
    roleLinkText:
      "Head of Department, Department of Computer Science and Information Systems",
    org: "University of Limerick, Ireland",
    bio:
      "Professor Michael Gerard Hinchey (born 1969) is an Irish computer scientist and former Director of the Irish Software Engineering Research Centre (Lero), a multi-university research centre headquartered at the University of Limerick, Ireland. He now serves as Head of Department of the Department of Computer Science & Information Systems at University of Limerick.",
    researchAreas:
      "Software Engineering, Evolving Critical Systems",
    image: "/speakers/mike.webp",
  },
  {
    name: "Prof. Carlos M. Fonseca",
    roleLinkText:
      "Associate Professor, Department of Informatics Engineering",
    org: "University of Coimbra, Portugal ",
    bio:
      "Carlos M. Fonseca graduated in Electronic and Telecommunications Engineering from the University of Aveiro, Portugal, in 1991, and obtained his doctoral degree from the University of Sheffield, U.K., in 1996. He is an Associate Professor at the Department of Informatics Engineering of the University of Coimbra, Portugal, and a member of the Adaptive Computation (AC) group of the Centre for Informatics and Systems of the University of Coimbra (CISUC). Formerly, he was a Research Associate with the Department of Automatic Control and Systems Engineering of the University of Sheffield, U.K., and a Lecturer at the Department of Electronic Engineering and Informatics, Faculty of Science and Technology, University of Algarve, Portugal. His current research interests include multiobjective optimization, evolutionary algorithms, experimental assessment of algorithms, dynamical systems, and engineering design optimization.",
    researchAreas:
      "Genetic Algorithms, Evolutionary Computation",
    image: "/speakers/carlos.jpg",
  },
  {
    name: "Prof. J. K. Mandal",
    roleLinkText:
      "Professor, Department of Computer Science and Engineering",
    org: "University of Kalyani, West Bengal ",
    bio:
      "Professor Jyotsna Kumar Mandal is a highly accomplished academic and researcher in the field of Computer Science and Engineering. He is currently affiliated with the Department of Computer Science and Engineering at the University of Kalyani, India. His current research interests include Coding Theory, Data and Network Security, Remote Sensing & GIS based Applications and more",
    researchAreas:
      "Coding Theory, Data and Network Security, Remote Sensing & GIS based Applications and more",
    image: "/speakers/jk-mondol.jpg",
  },
  {
    name: "Prof. Dhish Saxena",
    roleLinkText:
      "Professor, Department of Mechanical & Industrial Engineering",
    org: "IIT Roorkee",
    bio:
      "Professor Dhish Kumar Saxena is a prominent figure at the Indian Institute of Technology (IIT) Roorkee, where he serves as a Professor in Engineering Optimization. He is affiliated with both the Department of Mechanical and Industrial Engineering and the Mehta family School of Data Science and Artificial Intelligence",
    researchAreas:
      "AI assisted Optimization, Evolutionary Multi- and Many-objective Optimization, Multi-Criteria Decision Making",
    image: "/speakers/dk-saxsena.jpg",
  },
  {
    name: "Prof. Samiran Chattopadhyay",
    roleLinkText:
      "Vice Chancellor",
    org: "Techno India University, India",
    bio:
      "Professor (Dr.) Samiran Chattopadhyay is the Vice-Chancellor of Techno India University in West Bengal, India.",
    researchAreas:
      "Machine Intelligence, Wireless Networks, Network Security, Human-Computer Interaction, etc.",
    image: "/speakers/Samiran-Chattopadhyay.gif",
  },
  {
    name: "Prof. Chockalingam Ananthanarayanan",
    roleLinkText:
      "Department of Electrical and Communication Engineering",
    org: "IISc Bangalore",
    bio:
      "Professor Ananthanarayanan Chockalingam is a distinguished professor in the Department of Electrical Communication Engineering (ECE) at the Indian Institute of Science (IISc), Bangalore. He is also the founder and head of the Advanced Wireless Research Group (AWRG) at IISc. His research interests include wireless communications, MIMO systems, multiuser communications, and coding theory.",
    researchAreas:
      "Wireless Communications, MIMO Systems, Multiuser Communications, Coding Theory",
    image: "/speakers/AC_photo.jpg",
  },
];

export default function KeynoteSpeakers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Distinguished Keynote Speakers
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Renowned experts sharing cutting-edge research and insights at our premier conference
          </p>
        </div>

        {/* Speakers Grid */}
        <p className="text-center text-lg md:text-xl font-semibold text-slate-800">
          To be updated
        </p>

        {/* AMRIT-2025 speakers, kept for reference until the 2026 line-up is
            confirmed. Inner JSX comment markers were demoted to plain labels so
            this stays a single comment.
        <div className="grid grid-cols-1 gap-10">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row">
                Speaker Image
                <div className="md:w-2/5 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium">
                    View Profile
                  </div>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                Speaker Details
                <div className="md:w-3/5 p-7 md:p-8">
                  <h2 className="text-2xl md:text-2xl font-bold text-slate-800 mb-2.5 tracking-tight">
                    {speaker.name}
                  </h2>
                  
                  <div className="text-blue-700 font-medium mb-1.5">
                    {speaker.roleLinkText}
                  </div>
                  
                  <div className="flex items-center mt-2 text-slate-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {speaker.org}
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5 w-full"></div>
                  
                  <p className="mt-2 text-slate-700 leading-relaxed text-sm md:text-base line-clamp-4">
                    {speaker.bio}
                  </p>
                  
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-slate-800 flex items-center text-sm uppercase tracking-wide">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Research Focus Areas
                    </h3>
                    <p className="mt-2 text-slate-700 text-sm md:text-base">{speaker.researchAreas}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* Subtle Call-to-Action */}
        <div className="text-center mt-16 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Interested in Attending?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join us to hear these distinguished speakers and many more at our upcoming conference.
          </p>
          <Link to="/registration">
            <button className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
              Register Now
            </button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}