import React from 'react';

//svg
import { ReactComponent as TestimonialLogo } from '../assets/TestimonialLogo.svg';
import { ReactComponent as ZigZangVector } from '../assets/ZigZangVector.svg';

//components
import Header from '../components/Header';
import Table from '../components/Table/Table';

export default function Testimonial() {
  return (
    <div>
      <Header />
      <div className="mt-12 flex flex-col items-center">
        <TestimonialLogo />
        <h1 className="font-bold text-3xl py-4">Testimonial I've left</h1>
        <ZigZangVector />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
