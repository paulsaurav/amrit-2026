import React from 'react'

const HomepageOtherDetails = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto flex flex-col gap-12">

        {/* Row 1: Background + Expected Outcome */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Background */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mt-2 text-gray-900">BACKGROUND</h2>
            <p className="text-gray-800 text-md font-medium mt-1 text-justify">
              India is an emerging economy in the global scenario depending on the expertise in Computer Science & Information Technology, software exports, consultancy and R & D. The present global scenario is highly ambitious about the role of India and demanding for innovation, equity and development initiative in various growing and upcoming sectors. The Indian economy is tremendously successful during pandemic and post pandemic situation. All the developed nations and developing nations too are waiting for India’s move in the next twenty five years. The journey of success of India depends on the Governments initiatives towards Science, Education, Health and Industrial sectors. New education policy 2020 is about to implement in Universities and Institutions, therefore at this juncture, it is a high time to organise such International event to showcase our strength and start thinking in the new directions to lead our nation from the front.   The global scientific community already witnessed the rise of Indian computer science research and growth of Indian software industry. In the North East (NE) India there are a good number of academic institutions including one IIT, NITs, IIM and Central Universities offering Computer Science as a subject of specialization at graduation, post-graduation and doctoral level of education. That is why there is a strong need for a better platform of research and development activities in this region. Scientists and researchers usually go to R&D organisations/Universities in other parts of India to accomplish their research activities. <br /> <br />
              The international conference aims at providing a common platform for academicians and research scholars to present state-of-the-art scientific results, encourage academic and industrial interaction, and promote collaborative research activities in Computer Science and related fields, involving scientists, engineers, professionals, researchers and students from all over the country.
            </p>
          </div>

          {/* Expected Outcome */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mt-2 text-gray-900">EXPECTED OUTCOME</h2>
            <p className='text-gray-800 text-md font-medium mt-1 text-justify'>The major benefits that are expected may be furnished as below:-</p>
            <ul className="list-disc list-inside space-y-2 text-justify text-md text-gray-800 mt-2">
              <li>Provide an International forum for academicians and researchers in government organizations and industry to develop, contribute and present papers for meaningful interactions.</li>
              <li>
                Identifying key topics & futuristic problems for research in the area of Advanced Computing, Machine Learning, Robotics and Internet Technologies.
              </li>
              <li>
                Creating knowledgebase in electronic format.
              </li>
              <li>
                Publication of research outcome in the form of proceedings of the conference.
              </li>
              <li>
                Forge national and international research collaboration through exchange of technical knowledge and MOUs.
              </li>
              <li>Motivate young students and researchers for undertaking research.</li>
              <li>Exploring interdisciplinary research prospects in the major thrust areas of Computer Science.</li>
              <li>Lateral interaction with other nodal and related departments (Govt. / Semi Govt. Institutions / Industry) for development of new technologies.</li>
            </ul>
          </div>
        </div>

        {/* Row 2: Motivation */}
        <div>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">MOTIVATION</h2>
          <p className="text-gray-800 text-md font-medium mt-1 text-justify">
            The need of improvement in growth in the R&D sector of Computer Science has triggered the idea of a International Conference on the proposed theme. There is also an urgent need for training human resources, capacity building measures for Computer Science research and IT industry diversification and growth in the region that is constrained by the geographical isolation of the region, inadequacy and quality of infrastructure and the lack of well-developed IT markets. <br /> <br />
            A discussion with eminent experts in Computer Science from NE region and other part of the country has boosted the concept of holding this International Conference. Though geographically remote, the Department of Computer Science, Assam University Silchar is quite active in Computer Science research and has the potential of becoming a leading centre of research in near future particularly in the Southern part of the NE region. Thus, the department is ideally poised to hold this conference. The Conference, as proposed, is anticipated to provide a forum for fruitful discussions and active interactions amongst the resource persons and participants from various academic institutions, government organizations and industries in the NE India as well as with the peers in the rest of the country. The proposed event will help in bringing together participants from industry and academics to meet, discuss, exchange views and experiences on various issues related to R & D in Computer Science.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomepageOtherDetails