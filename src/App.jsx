import React from 'react';
import Hero from './components/sections/Hero';
import Programs from './components/sections/Programs';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Hero />
      <Programs />
    </main>
  );
}
