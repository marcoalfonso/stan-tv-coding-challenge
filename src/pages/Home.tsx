import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import HomeSkeleton from '../components/HomeSkeleton';
import { ProgramData } from '../types';

const Home: React.FC = () => {
  const [programs, setPrograms] = useState<ProgramData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
      setLoading(false);
    } catch (error) {
      setError('An unknown error occurred. please try again later');
      setLoading(false);
    }
  };

  const handleProgramClick = (programId: number) => {
    navigate(`/program/${programId}`);
  };

  return (
    <div className="home">
      <Header />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <HomeSkeleton />
      ) : (
        <Carousel
          programs={programs}
          onProgramClick={handleProgramClick}
        />
      )}
      
    </div>
  );
};

export default Home;