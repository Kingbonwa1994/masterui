import React from 'react';
import Navigation from './Navigation';
import Scroll from './Scroll';

export default function Hero({currentSection}) {
  return (
    <div className="min-h-screen bg-[#0000ff] flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-gray-200 opacity-75">
          <div>
            <Navigation />
          </div>
          <div>
            <Scroll currentSection={currentSection}/>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#000033] mb-4">Question</div>
            <div className="text-2xl text-[00001a]">Answer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
