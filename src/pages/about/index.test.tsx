import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { About } from './index';

describe('test app about page', () => {
  it('should success render', function () {
    const history = createMemoryHistory({ initialEntries: ['/about'] });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <About />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should success back to home page use history.push', function () {
    const history = createMemoryHistory({ initialEntries: ['/about'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <About />
      </Router>,
    );
    expect(history.location.pathname).toBe('/about');
    fireEvent.click(getByText('back home page with navigate(history.push) jump'));
    expect(history.location.pathname).toBe('/home');
  });

  it('should success back to home page use history.replace', function () {
    const history = createMemoryHistory({ initialEntries: ['/about'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <About />
      </Router>,
    );
    expect(history.location.pathname).toBe('/about');
    fireEvent.click(getByText('back home page with navigate(history.replace) jump'));
    expect(history.location.pathname).toBe('/home');
  });
});
