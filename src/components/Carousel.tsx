import React, { useState, useEffect } from 'react';
import { ProgramData } from '../types';

interface CarouselProps {
  programs: ProgramData[];
  onProgramClick: (programId: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ programs, onProgramClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Logic for managing keyboard navigation
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === 'ArrowRight') {
      setActiveIndex((prevIndex) => (prevIndex < programs.length - 1 ? prevIndex + 1 : prevIndex));
    } else if (event.key === 'Enter') {
      onProgramClick(programs[activeIndex].id);
    }
  };

  // Event listener for keyboard navigation, gets removed when component unmounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, programs]);

  const visiblePrograms = programs?.slice(activeIndex, activeIndex + 6);

  return (
    <div className="carousel">
      <div className="carousel__container">
        {visiblePrograms?.map((program, index) => {
          console.log("index", index)
          console.log('activeIndex', activeIndex)
          return (
          <div
            key={program.id}
            className="carousel__item"
            onClick={() => onProgramClick(program.id)}
          >
            <img
              className={`${program.id === programs[activeIndex].id ? 'active' : ''}`}
              src={program.image} 
              alt={program.title} />
          </div>
        )})}
      </div>
    </div>
  );
};

export default Carousel;