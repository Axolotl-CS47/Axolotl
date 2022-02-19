/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from '../client/components/Dashboard.jsx';

it('renders Dashboard heading', () => {
render(<Dashboard />);
 expect(screen.getByRole('heading')).toHaveTextContent('Look Up Flights');
});

it('renders Dashboard button', () => {
  render(<Dashboard />);
   expect(screen.getByRole('button')).toHaveTextContent('Search');
  });