import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ConferenceInfo from "../components/ConferenceInfo";
import Gallery from "../components/Gallery";
import AboutConference from "../components/AboutConference";
import HomepageOtherDetails from "../components/HomepageOtherDetails";
import Venue from "../components/Venue";
import Sponsors from "../components/Sponsors";
import CMT from "../components/CMT";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amrit-2025|Amrit Conferences</title>
        <link rel="canonical" href="https://amrit2025.amritconferences.in/" />
        <meta
          name="3rd INTERNATIONAL CONFERENCE ON
ADVANCED COMPUTING, MACHINE LEARNING,
ROBOTICS AND INTERNET TECHNOLOGIES"
          content="Amrit-2025 Conference"
        />
      </Helmet>
      <Marquee />
      <Header />
      <HeroSection />
      <ConferenceInfo />
      <AboutSection />
      <Gallery />
      <AboutConference />
      <HomepageOtherDetails />
      <Venue />
      <Sponsors />
      <CMT />
      <Footer />
    </>
  );
};

export default Home;
