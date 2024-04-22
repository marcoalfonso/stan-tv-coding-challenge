import React from 'react';

const ProgramSkeleton: React.FC = () => {
  return (
    <div className="program__container">
      <div className="program__header">
        <div className="program__image program__skeleton__image" />
        <div className="program__info">
          <div className="program__title program__skeleton__title" />
          <div className="program__details program__skeleton__details" />
          <div className="program__description program__skeleton__description" />
        </div>
      </div>
    </div>
  );
};

export default ProgramSkeleton;