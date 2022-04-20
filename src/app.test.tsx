import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './App';

describe('test App.tsx', () => {
  it('snapshot test', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
