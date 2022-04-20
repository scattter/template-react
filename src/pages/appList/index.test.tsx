import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import AppList from './index';

describe('test app list page', () => {
  const wrapper = shallow(<AppList />);

  it('should success render', function () {
    expect(wrapper).toMatchSnapshot();
  });

  it('should success go to app detail page by click li', function () {
    const history = createMemoryHistory({ initialEntries: ['/app'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <AppList />
      </Router>,
    );
    expect(history.location.pathname).toBe('/app');
    fireEvent.click(getByText('this is detail NO.1'));
    expect(history.location.pathname).toBe('/app/1');
  });
});
