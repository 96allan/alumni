
import React from 'react';
import Benefits from '../components/Benefits';
import Documents from '../components/Documents';
import FadeInSection from '../components/common/FadeInSection';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
                The UICT Alumni Network is a vibrant community dedicated to fostering lifelong connections among graduates, supporting professional growth, and giving back to our alma mater.
            </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <FadeInSection>
                    <img src="https://picsum.photos/seed/uict_building/800/600" alt="UICT Campus" className="rounded-lg shadow-xl w-full" />
                </FadeInSection>
                <FadeInSection>
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        To connect, engage, and empower UICT alumni globally, providing a platform for collaboration, mentorship, and professional development while supporting the university's legacy of excellence.
                    </p>
                    <h2 className="text-3xl font-bold text-primary mb-6">Our History</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Founded in 1998, the Alumni Association started as a small group of graduates meeting annually. Today, it has grown into a global network with over 10,000 members across 50 countries, united by a shared history and a commitment to the future.
                    </p>
                </FadeInSection>
            </div>
        </div>
      </section>

      <Benefits />
      <Documents />
    </div>
  );
};

export default About;
