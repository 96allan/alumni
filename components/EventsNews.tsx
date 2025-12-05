
import React, { useState } from 'react';
import { events, news } from '../data/mockData';
import FadeInSection from './common/FadeInSection';
import { Event } from '../types';

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>
);

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsRegistered(true);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex transform hover:shadow-xl transition-shadow duration-300">
            <img src={event.imageUrl} alt={event.title} className="w-1/3 h-auto object-cover" />
            <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{event.type}</span>
                    <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
                    <p className="text-gray-600 text-sm flex items-center mt-1">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {event.date}
                    </p>
                </div>
                <button 
                    onClick={handleRegister}
                    disabled={isRegistered || isLoading}
                    className={`mt-4 self-start px-4 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center ${
                        isRegistered 
                            ? 'bg-green-100 text-green-700 cursor-default' 
                            : 'bg-secondary text-white hover:bg-opacity-90'
                    }`}
                >
                    {isLoading ? (
                        <>
                             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Registering...
                        </>
                    ) : isRegistered ? (
                        <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Registered
                        </>
                    ) : 'Register'}
                </button>
            </div>
        </div>
    );
};

const EventsNews: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Events & News</h2>
        </FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Events Column */}
          <FadeInSection>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
              <div className="space-y-6">
                {events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* News Column */}
          <FadeInSection>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Latest News</h3>
              <div className="space-y-6">
                {news.map(item => (
                   <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex transform hover:shadow-xl transition-shadow duration-300">
                    <img src={item.imageUrl} alt={item.title} className="w-1/3 h-auto object-cover" />
                    <div className="p-4 flex flex-col justify-between w-2/3">
                      <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{item.category}</span>
                        <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.summary}</p>
                      </div>
                      <a href="#" className="mt-4 self-start text-secondary font-semibold hover:underline text-sm">Read More &rarr;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default EventsNews;
