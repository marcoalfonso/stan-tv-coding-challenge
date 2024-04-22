import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Carousel from './Carousel';
import { ProgramData } from '../types';
import '@testing-library/jest-dom';

const mockPrograms: ProgramData[] = [
  {
    id: 1,
    title: 'Program 1',
    description: 'Description of Program 1',
    type: 'series',
    image: 'image1.jpg',
    rating: 'TV-14',
    genre: 'Drama',
    year: 2021,
    language: 'English',
  },
  {
    id: 2,
    title: 'Program 2',
    description: 'Description of Program 2',
    type: 'movie',
    image: 'image2.jpg',
    rating: 'PG-13',
    genre: 'Comedy',
    year: 2022,
    language: 'Spanish',
  },
  {
    id: 3,
    title: 'Program 3',
    description: 'Description of Program 3',
    type: 'series',
    image: 'image3.jpg',
    rating: 'TV-MA',
    genre: 'Thriller',
    year: 2020,
    language: 'French',
  },
];

describe('Carousel component', () => {
  test('renders carousel with visible programs', () => {
    const onProgramClick = jest.fn();
    const { container } = render(
      <Carousel programs={mockPrograms} onProgramClick={onProgramClick} />
    );
    expect(container.querySelector('.carousel')).toBeInTheDocument();
    expect(container.querySelectorAll('.carousel__item').length).toBeLessThanOrEqual(6);
  });

  test('calls onProgramClick when a program is clicked', () => {
    const onProgramClick = jest.fn();
    const { container } = render(
      <Carousel programs={mockPrograms} onProgramClick={onProgramClick} />
    );
    const programItem = container.querySelector('.carousel__item');
    if (programItem) {
      fireEvent.click(programItem);
      expect(onProgramClick).toHaveBeenCalledTimes(1);
      expect(onProgramClick).toHaveBeenCalledWith(mockPrograms[0].id);
    }
  });

  test('handles keyboard navigation', async () => {
    const onProgramClick = jest.fn();
    const { container } = render(
      <Carousel programs={mockPrograms} onProgramClick={onProgramClick} />
    );
    const carousel = container.querySelector('.carousel');
    
    if (carousel) {
      fireEvent.keyDown(carousel, { key: 'ArrowRight' });
      
      await waitFor(() => {
        const activeItem = container.querySelector('.carousel__item img.active');
        expect(activeItem).toBeInTheDocument();
        expect(activeItem?.getAttribute('src')).toBe('image2.jpg');
      });
      
      fireEvent.keyDown(carousel, { key: 'ArrowLeft' });
      
      await waitFor(() => {
        const activeItem = container.querySelector('.carousel__item img.active');
        expect(activeItem).toBeInTheDocument();
        expect(activeItem?.getAttribute('src')).toBe('image1.jpg');
      });
      
      fireEvent.keyDown(carousel, { key: 'Enter' });
      expect(onProgramClick).toHaveBeenCalledTimes(1);
      expect(onProgramClick).toHaveBeenCalledWith(mockPrograms[0].id);
    }
  });
});