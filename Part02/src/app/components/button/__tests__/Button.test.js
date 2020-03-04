import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders button', () => {
  const container = render(<Button />)
  expect(container.container).toMatchSnapshot()
});
