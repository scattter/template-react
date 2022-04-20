import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import AppLayout from './index';

describe('test app layout page', () => {
  it('should success render', function () {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <AppLayout />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should success jump to home page', function () {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <AppLayout />
      </Router>,
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('click here back to home page'));
    expect(history.location.pathname).toBe('/home');
  });
});
