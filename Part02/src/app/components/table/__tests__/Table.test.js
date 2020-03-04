import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table';

test('renders table', () => {
  const container = render(<Table />)
  expect(container.container).toMatchSnapshot()
});
