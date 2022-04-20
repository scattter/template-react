import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { Home } from './index';

let history: MemoryHistory;
// mock history(but in appList page test don't need do this)
const mockedUsedNavigate = jest.fn(() => (path: string) => history.push(path));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate(),
}));

describe('test Home page', () => {
  beforeEach(() => {
    history = createMemoryHistory({ initialEntries: ['/home'] });
  });
  it('snapshot test', function () {
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should success increment count when click button', function () {
    // const strong = wrapper.find('strong').first();
    // expect(strong.text()).toEqual('state is 0');
    // wrapper.find('button').first().simulate('click');
    // await (() => {
    //   expect(strong.text()).toEqual('state is 1');
    // });
    const { getByText, getAllByText } = render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>,
    );
    expect(getAllByText('state is 0').length).toEqual(1);
    fireEvent.click(getByText('revert state'));
    expect(getAllByText('state is 1').length).toEqual(1);
  });

  it('should success jump to about page', function () {
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>,
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('click here to about page'));
    expect(history.location.pathname).toBe('/about');
  });

  it('should success jump to app page', function () {
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>,
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('click here to app list page'));
    expect(history.location.pathname).toBe('/app');
  });
});
