import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Program from './Program';
import { ProgramData } from '../types';
const fetch = require('node-fetch');
global.fetch = fetch as unknown as typeof global.fetch;

const mockPrograms: ProgramData[] = [{
  id: 1,
  title: 'Mock Program',
  description: 'This is a mock program for testing.',
  type: 'series',
  image: 'mock-image.jpg',
  rating: 'TV-14',
  genre: 'Drama',
  year: 2022,
  language: 'English',
}];

describe('Program component', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPrograms),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders program details correctly', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Program />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByTestId('program')).toBeInTheDocument());
  });
});