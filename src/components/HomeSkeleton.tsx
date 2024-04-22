import React from 'react';

const HomeSkeleton: React.FC = () => {
  return (
    <div className='carousel'>
      <div className="carousel__container home__skeleton">
        { [...Array(6)].map((_, index) => <div key={index} className="carousel__item home__skeleton__item"></div>) }
      </div>
    </div>
  );
};

export default HomeSkeleton;