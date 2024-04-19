import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { ProgramData } from '../types';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [programs, setPrograms] = useState<ProgramData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch program data
  const fetchData = async () => {
    try {
      const response = await fetch('data/data.json');
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      setError('An unknown error occurred. please try again later');
    }
  };

  const handleProgramClick = (programId: number) => {
    navigate(`/program/${programId}`);
  };

  return (
    <div className="home">
      <Header />
      {error && <p className="error">{error}</p>}
      <Carousel
        programs={programs}
        onProgramClick={handleProgramClick}
      />
    </div>
  );
};

export default Home;