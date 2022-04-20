import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import AppDetail from './index';

describe('test app detail page', () => {
  it('should success render', function () {
    const history = createMemoryHistory({ initialEntries: ['/app/1'] });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <AppDetail />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should success back to app list page', function () {
    const history = createMemoryHistory({ initialEntries: ['/app/1'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <AppDetail />
      </Router>,
    );
    expect(history.location.pathname).toBe('/app/1');
    fireEvent.click(getByText('back to app list'));
    expect(history.location.pathname).toBe('/app');
  });
});
