import React, { useEffect } from 'react';

//components
import Header from '../components/Header';
import Table from '../components/Table/Table';
import Testimoni from '../components/Testimoni';

//fetch data
import { useFetch } from '../hooks/useFetch';
export default function Testimonial() {
  return (
    <div>
      <Header />
      <Testimoni />
      <div>
        <Table />
      </div>
    </div>
  );
}
