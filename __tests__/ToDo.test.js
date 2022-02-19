/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import '@testing-library/jest-dom'
 import renderer from 'react-test-renderer';
import ToDo from '../client/components/ToDo';
 
 it('renders ToDo', async () => {
  const component = renderer.create(
    <ToDo />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 });
 
