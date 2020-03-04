import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../Pagination';

test('renders pagination', () => {
  const container = render(<Pagination />)
  expect(container.container).toMatchSnapshot()
});
