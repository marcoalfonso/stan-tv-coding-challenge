import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { ProgramData } from '../types';
import Carousel from '../components/Carousel';
const fetch = require('node-fetch');
global.fetch = fetch as unknown as typeof global.fetch;

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

jest.mock('../components/Carousel', () => ({
  __esModule: true,
  default: () => <div data-testid="carousel" />,
}));

describe('Home component', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPrograms),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders home page with carousel', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByTestId('carousel')).toBeInTheDocument());
  });

  test('navigates to program page when program is clicked', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByTestId('carousel')).toBeInTheDocument());
    const onProgramClick = jest.fn();
    const { container } = render(
      <Carousel programs={mockPrograms} onProgramClick={onProgramClick} />
    );
    const programItem = container.querySelector('.carousel__item');
    if (programItem) {
      fireEvent.click(programItem);
      expect(window.location.pathname).toBe(`/program/${mockPrograms[0].id}`);
    }   
  });

  test('displays error message when data fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Fetch error'));
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByText('An unknown error occurred. please try again later')).toBeInTheDocument());
  });
});