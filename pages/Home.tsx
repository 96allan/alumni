
import React from 'react';
import Hero from '../components/Hero';
import Spotlight from '../components/Spotlight';
import AlumniMap from '../components/AlumniMap';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Spotlight />
      <AlumniMap />
      <Testimonials />
    </>
  );
};

export default Home;
