import React from 'react';
import { render } from '@testing-library/react';
import IconButton from '../IconButton';

test('renders icon button', () => {
  const container = render(<IconButton icon="home"/>)
  expect(container.container).toMatchSnapshot()
});
