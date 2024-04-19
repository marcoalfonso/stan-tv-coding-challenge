import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProgramData } from '../types';
import Header from '../components/Header';

const Program: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [program, setProgram] = useState<ProgramData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [id]);

  // Fetch program data
  const fetchData = async () => {
    try {
      const response = await fetch('data/data.json');
      const data = await response.json();
      const selectedProgram = data.find(
        (program: ProgramData) => program.id === parseInt(id!)
      );
      setProgram(selectedProgram || null);
    } catch (error) {
      setError('An unknown error occurred. please try again later');
    }
  };

  const handleBackspace = (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      navigate('/');
    }
  };

  // Event listener for navigating back with backspace
  useEffect(() => {
    document.addEventListener('keydown', handleBackspace);
    return () => {
      document.removeEventListener('keydown', handleBackspace);
    };
  }, []);

  return (
    <div className="program">
      <Header />
      {error && <p className="error">{error}</p>}
      {program &&
        <div className="program__container">
          <div className="program__header">
            <img src={program.image} alt={program.title} className="program__image" />
            <div className="program__info">
              <h1 className="program__title">{program.title}</h1>
              <p className="program__details">
                {program.rating} | {program.year} | {program.type} | {program.genre} | {program.language}
              </p>
              <p className="program__description">{program.description}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Program;