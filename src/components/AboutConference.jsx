import React from "react";
import NoticesPanel from "./NoticesPanel";

const AboutConference = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT: About the Conference */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-2xl font-bold mt-2 text-gray-900">
            ABOUT THE CONFERENCE
          </h2>
          <p className="text-gray-800 text-md font-medium mt-1 text-justify">
            AMRIT-2023 is the first International Conference in the Department
            of Computer Science. The conference aims to gain significant
            interest among researchers, academicians, professionals, and
            students in the region, covering all the topics of Computer Science
            and its current trends of research. The AMRIT-2023 targets to offer
            a platform for research collaboration, networking, and presentation
            of recent research findings in the fields of Computer Science and
            other allied subjects. <br /> <br />
            AMRIT-2023 is expected to bring together researchers, educators,
            students, practitioners, technocrats, and policymakers from
            academia, government, industry, and nongovernmental organizations to
            discuss, share, and promote current research works and recent
            research accomplishments across all the thrust areas of Computer
            Science and other allied subjects in the region. This event is a
            part of Silver Jubilee Celebration of the Department. Since the
            Department has been catering a remarkable service to the region for
            the last 25 years and has reached a prestigious milestone with many
            achievements and remarkable success. The Department has already
            organised successfully many national and regional programmes in the
            recent past on various research topics. The Department witnessed a
            grand National Conference CTCS-2010 with funding from prestigious
            organisations like DST, DIT (now MeiTY), DoNER etc. In the recent
            past the research works in the Department on various thrust areas
            improved and touched a new level. The present International
            Conference AMRIT-2023 will definitely ignite the process of
            improvement and the journey to further heights to touch the global
            standards. A good number of keynote addresses by reputed
            academicians, high-quality invited talks, tutorials, technical
            sessions, poster presentations, industry exhibitions are planned in
            the proposed conference.
          </p>
        </div>

        {/* RIGHT: Notices */}
         <div className="w-full md:w-[30%]">
          <NoticesPanel />
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
