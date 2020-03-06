import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders button', () => {
  const container = render(<Button icon="settings" text="teste"/>)
  expect(container.container).toMatchSnapshot()
});
