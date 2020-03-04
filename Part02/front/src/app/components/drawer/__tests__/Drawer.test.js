import React from 'react';
import { render } from '@testing-library/react';
import Drawer from '../Drawer';

test('renders drawer', () => {
  const container = render(<Drawer />)
  expect(container.container).toMatchSnapshot()
});
