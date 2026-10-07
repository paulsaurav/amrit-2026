import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import ConferenceTracks from './pages/ConferenceTracks';
import CommitteePage from './pages/CommitteePage';
import Registration from './pages/Registration';
import Schedule from './pages/Schedule';
import Archive from './pages/Archive';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
// import CMTAcknowledgment from './pages/CMTAcknowledgment'; 

const App = () => {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/call-for-paper' element={<ConferenceTracks />} />
      {/* <Route path="/cmt_acknowledgment" element={<CMTAcknowledgment />} /> */}
      <Route path="/committee" element={<CommitteePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/schedules" element={<Schedule />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
};

export default App;
