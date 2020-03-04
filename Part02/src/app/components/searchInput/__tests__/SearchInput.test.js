import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';

test('renders search input', () => {
  const container = render(<SearchInput />)
  expect(container.container).toMatchSnapshot()
});
