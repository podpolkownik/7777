import React from 'react';
import { Header } from './components/Header';
import { Story } from './components/Story';
import { DoctorSection } from './components/DoctorSection';
import { CTASection } from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Story />
      <DoctorSection />
      <CTASection />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default App;