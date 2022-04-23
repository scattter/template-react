import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';

import { lazyLoad, routes } from './index';

describe('test lazy load function', () => {
  jest.mock('react', () => {
    const React = jest.requireActual('react');
    React.Suspense = (children: ReactNode): ReactNode => children;
    return React;
  });
  it('should success render element', function () {
    const load = lazyLoad(<div>123</div>);
    const { getByText } = render(<div>{load}</div>);
    expect(getByText('123')).toBeInTheDocument();
  });
});

describe('test project routes', () => {
  it('should success load home component', async () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { findByText } = render(
      <Router location={history.location} navigator={history}>
        {routes[0].element}
      </Router>,
    );
    const textToMatch = await findByText('This is Home Page');
    expect(textToMatch).toBeInTheDocument();
  });

  it('should success load app layout component', async () => {
    function MockedAppLayout() {
      return <div>mocked app layout component</div>;
    }
    jest.mock('../pages/appLayout', () => {
      return MockedAppLayout;
    });
    const { findByText } = render(<div>{routes[1].element}</div>);
    const textToMatch = await findByText('mocked app layout component');
    expect(textToMatch).toBeInTheDocument();
  });

  it('should success load app about component', async () => {
    function MockedAppAbout() {
      return <div>mocked app about component</div>;
    }
    jest.mock('../pages/about', () => {
      return MockedAppAbout;
    });
    const { findByText } = render(<div>{routes[2].element}</div>);
    const textToMatch = await findByText('mocked app about component');
    expect(textToMatch).toBeInTheDocument();
  });

  it('should success load not found component', async () => {
    function MockedNotFound() {
      return <div>mocked not found component</div>;
    }
    jest.mock('../pages/notFound', () => {
      return MockedNotFound;
    });
    const { findByText } = render(<div>{routes[3].element}</div>);
    const textToMatch = await findByText('mocked not found component');
    expect(textToMatch).toBeInTheDocument();
  });

  it('should success load app list and app detail components', async () => {
    function MockedAppList() {
      return <div>mocked app list component</div>;
    }
    function MockedAppDetail() {
      return <div>mocked app detail component</div>;
    }
    jest.mock('../pages/appDetail', () => {
      return MockedAppDetail;
    });
    jest.mock('../pages/appList', () => {
      return MockedAppList;
    });
    const [appList, appDetail] = routes[1].children as [
      { path: string; element: ReactNode },
      { path: string; element: ReactNode },
    ];
    const { findByText } = render(
      <div>
        {appList.element}
        {appDetail.element}
      </div>,
    );
    const textToAppListMatch = await findByText('mocked app list component');
    const textToAppDetailMatch = await findByText('mocked app detail component');
    expect(textToAppListMatch).toBeInTheDocument();
    expect(textToAppDetailMatch).toBeInTheDocument();
  });
});
