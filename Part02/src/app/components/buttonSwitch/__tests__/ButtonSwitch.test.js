import React from 'react';
import { render } from '@testing-library/react';
import ButtonSwitch from '../ButtonSwitch';

test('renders button switch', () => {
  const container = render(<ButtonSwitch />)
  expect(container.container).toMatchSnapshot()
});
