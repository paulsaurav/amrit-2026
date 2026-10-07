import Footer from "../components/Footer";
import Header from "../components/Header";

const people = [
  {
    role: "Chief Patron",
    name: "Prof. Rajive Mohan Pant",
    title: "Vice-Chancellor, Assam University, Silchar",
    img: "/committee/vc.webp", // replace with real path or URL
    profileHref: "#",
  },
  {
    role: "Co-Patron",
    name: "Prof. Karabi Dutta Choudhury",
    title: "Dean, AESoPS, Assam University, Silchar",
    img: "/committee/dean-maam.jpeg",
    profileHref: "#",
  },
  {
    role: "General Chair",
    name: "Prof. Prodipto Das",
    title:
      "Head, Department of Computer Science, Assam University, Silchar",
    img: "/committee/pd-sir.jpeg",
    profileHref: "#",
  },
  {
    role: "Organising Chair cum Convener",
    name: "Dr. Bishwa Ranjan Roy",
    title:
      "Associate Professor, Department of Computer Science, Assam University, Silchar",
    img: "/committee/biswa-sir.jpeg",
    profileHref: "#",
  },
  {
    role: "Publication Chair",
    name: "Dr. Somnath Mukhopadhyay",
    title:
      "Assistant Professor, Department of Computer Science and Engineering,\nAssam University, Silchar",
    img: "/committee/somnath-sir.jpeg",
    profileHref: "#",
  },
];

const lists = {
  technicalChairs: [
    "Prof. Ranjit Singha, AUDC",
    "Prof. Ajoy Kr. Khan, MZU",
    "Dr Somen Debnath, TU",
    "Dr. Tapodhir Acherjee, AUS",
    "Dr. Subrata Hazarika, AUDC",
    "Dr. P.K. Paul, Raiganj University",
    "Dr. Sadhan Gope, NITA",
    "Dr. Ajit Kr. Tamuli, AUDC",
    "Dr. Santosh Satapathy, PDEU",
    "Dr. John Carlo Torres, LPU",
  ],
  publicityChairs: [
    "Dr. R. Chawnsangpuii, MZU",
    "Dr. Arnab Majhi, NEHU",
    "Dr. Anirban Roy, AUDC",
    "Dr. Indika Devi, IGNTU",
    "Dr. Arnab Paul, AUS",
    "Dr. Satyabrata Nath, VIT Bhopal",
    "Dr. Abhijit Paul, SVU",
    "Dr. Ishita Chakraborty, RVU",
    "Dr. Munmi Gogoi, GLA Univ.",
    "Dr. Rabindra Teron, AUDC",
  ],
  localOrganising: [
    "Prof. B.S. Purkayastha",
    "Prof. S.A. Begum",
    "Prof. P.K. Deva Sarma",
    "Dr. Arindam Roy",
    "Dr. Rakesh Kumar",
    "Dr. Indrani Das",
    "Dr. B.S. Meena",
    "Dr. Sanju Das",
    "Mr. Nayanjyoti Majumder",
  ],
  jointOrganising: [
    "Dr. Saptarshi Paul",
    "Dr. Purnendu Das",
    "Dr. Debasish Roy",
    "Dr. Rahul Kumar Chawda",
  ],
  internationalAdvisory: [
    "Prof. Rajkumar Bhuyya, University of Melbourne, Australia",
    "Prof. E. Velentina Balas, University of Arad, Romania",
    "Prof. Umapada Pal, ISI Kolkata, India",
    "Prof. Gaurav Trivedi, IIT Guwahati, India",
    "Prof. Neil P. Balba, LPU- Laguna, Philippines",
  ],
  nationalAdvisory: [
    "Prof. Tanmoy Som, IIT (BHU), Varanasi",
    "Prof. J.K. Mandal, Kalyani University",
    "Prof. Utpal Roy, Visva Bharati",
    "Prof. Jamal Hussain, MZU",
    "Prof. N.P. Maity, MZU",
    "Prof. L. Lolit Kr. Singh, MU",
    "Prof. Sarmistha Neogy, Jadavpur University",
    "Prof. Rajat Kumar Paul, Calcutta University",
    "Prof. Sunil Karforma, Burdwan University",
    "Prof. Rashmi Bhardwaj, Indraprastha University, Delhi",
    "Prof. Sushmita Sur Koley, ISI Kolkata",
    "Prof. M. K. Ghosh, ISRO Scientist",
    "Dr. Shirshendu Das, IIT, Hyderabad",
    "Prof. Samarjit Borah, SMIT",
    "Dr. Ferdous Ahmed Barbhuiya, IIITG",
    "Prof. Nabanita Das, ISI Kolkata",
    "Prof. Anajana Kakati Mahanta, GU",
    "Prof. Smriti Kumar Sinha, Tezpur University",
    "Prof. Utpal Bhattachejee, RGU",
    "Prof. S. Govindarajan, SRM University",
    "Prof. K. L. Baishnab, NIT Silchar",
    "Prof. Suchita Upadhyay Bhasin, Kurukshetra University",
    "Prof. Sudipto Roy, Assam University",
    "Prof. Sanjoy Das, RGNTU, Imphal",
    "Prof. Ningrinla Marchang, NERIST",
    "Prof. Ajoy Kumar Khan, MZU",
    "Dr. Biswajit Saha, CDAC Kolkata",
    "Dr. Somen Debnath, Tripura University",
  ],
  tpc: [
    "Dr. Koushik Guha, NIT Silchar",
    "Dr. Wasim Arif, NIT Silchar",
    "Dr. Sadhan Gope, NIT Agartala",
    "Dr. Alok Chakraborty, NIT Meghalaya",
    "Dr. Amitabha Nath, NEHU",
    "Dr. Abhishek Majumder, Tripura University",
    "Dr. Bibhash Sen, NIT Durgapur",
    "Dr. Shridhar Patnaik, BITS Mesra",
    "Dr. Arnab Kumar Majhi, NEHU",
    "Dr. Budhdhadeb Pradhan, UEM, Kolkata",
    "Dr. Santosh Satapathy, PDEU",
    "Dr. Tapodhir Acherjee, AUS",
    "Dr. Ananya Das, KC",
    "Dr. Ranjita Das, NIT Agartala",
    "Dr. Abhijit Paul, Amity University",
    "Dr. Arnab Paul, AUS",
    "Dr. Sourish Dhar, AUS",
    "Dr. Mousam Handique, AUS",
    "Dr. Subrata Sinha, AUS",
    "Dr. Abul Fujail, MCMH",
    "Dr. Rajib Das, KC",
    "Dr. Ishita Chakraborty, RV University",
    "Dr. Munmi Gogoi, GLA University",
    "Dr. Abhijit Paul, GCC",
    "Dr. O. Mema Devi, GCC",
    "Dr. Kh. Raju Singha, NCC",
    "Dr. Nitin Rajput, PDEU",
    "Dr. Satyabrata Nath, VIT Bhopal",
    "Dr. Suman Deb, NIT Agartala",
    "Dr. R. Chawngsangpuii, MZU",
  ],
};

function RoleLine({ role }) {
  return (
    <div className="text-2xl md:text-3xl font-bold leading-tight text-black">
      {role}
      <div className="h-1 w-12 bg-blue-600 rounded mt-2"></div>
    </div>
  );
}

function LeaderItem({ p }) {
  return (
    <div className="flex items-start gap-5">
      <div className="avatar">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full ring ring-offset-2 ring-base-200 overflow-hidden">
          <img src={p.img} alt={p.name} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex-1 text-black">
        <RoleLine role={p.role} />
        <div className="mt-3 font-semibold">{p.name}</div>
        <p className="whitespace-pre-line">{p.title}</p>
      </div>
    </div>
  );
}

function ListBlock({ title, items, center = false }) {
  return (
    <div className="text-black">
      <div
        className={`font-semibold underline underline-offset-4 ${
          center ? "text-center" : ""
        }`}
      >
        {title}
      </div>
      <ol
        className={`list-decimal mt-3 space-y-1 ${
          center ? "ml-6 md:mx-auto max-w-3xl" : "ml-6"
        }`}
      >
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </div>
  );
}

function TwoColList({ title, items }) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <div className="text-black">
      <div className="font-semibold underline underline-offset-4 text-center">
        {title}
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-3">
        <ol className="list-decimal ml-6 space-y-1">
          {left.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
        <ol className="list-decimal ml-6 space-y-1">
          {right.map((t, i) => (
            <li key={i + left.length}>{t}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <section className="bg-white text-black">
        <Header />
        <div
  className="h-screen bg-[url('/committee/com-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center bg-gradient-to-t from-black/70 to-transparent  justify-center mb-14"
>
  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
    Committee
  </h1>
</div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Leadership */}
        <div className="space-y-12">
          {people.map((p) => (
            <LeaderItem key={p.role} p={p} />
          ))}
        </div>

        {/* Row 1: Technical + Publicity */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <ListBlock title="Technical Chairs" items={lists.technicalChairs} />
          <ListBlock title="Publicity Chairs" items={lists.publicityChairs} />
        </div>

        {/* Row 2: Local + Joint */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <ListBlock
            title="Local Organising Members"
            items={lists.localOrganising}
          />
          <ListBlock
            title="Joint Orginising Chairs"
            items={lists.jointOrganising}
          />
        </div>

        {/* Row 3: International Advisory → 1 col center */}
        <div className="mt-16">
          <ListBlock
            title="International Advisory Committee"
            items={lists.internationalAdvisory}
            center
          />
        </div>

        {/* Row 4: National Advisory → 2 col center */}
        <div className="mt-16">
          <TwoColList
            title="National Advisory Committee"
            items={lists.nationalAdvisory}
          />
        </div>

        {/* Row 5: Technical Programme → 2 col center */}
        <div className="mt-16">
          <TwoColList
            title="Technical Programme Committee"
            items={lists.tpc}
          />
        </div>
      </div>
      <br /><br />
      <Footer />
    </section>
  );
}
