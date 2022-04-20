import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import NotFound from './index';

describe('test not found page', () => {
  it('should success render', function () {
    const history = createMemoryHistory({ initialEntries: ['/123'] });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <NotFound />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should success jump to home page', function () {
    const history = createMemoryHistory({ initialEntries: ['/123'] });
    render(
      <Router location={history.location} navigator={history}>
        <NotFound />
      </Router>,
    );
    expect(history.location.pathname).toBe('/home');
  });
});
