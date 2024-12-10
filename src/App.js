import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Footer from './components/footer'; 


// Pages
import Home from './pages/Home'; 
import CourseDetails from './pages/CourseDetails'; 
import GroomingPlans from './pages/GroomingPlans'; 
import About from './pages/About'; 
import Terms from './pages/Terms'; 
import Privacy from './pages/Privacy'; 
import RefundPolicy from './pages/RefundPolicy'; 
import CoursePage from './components/MainCourse';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/:courseKey" element={<CoursePage  />} />
        <Route path="/:mainCourse/:subCourse" element={<CourseDetails />} />
        <Route path="/groomingplans" element={<GroomingPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
