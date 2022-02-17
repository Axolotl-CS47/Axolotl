/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import '@testing-library/jest-dom'
 import renderer from 'react-test-renderer';
import TableRow from '../client/components/TableRow';
 
 it('renders TableRow', async () => {
  const component = renderer.create(
    <TableRow rowData={<td>Country</td>}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 });
 
