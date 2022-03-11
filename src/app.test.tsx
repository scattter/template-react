import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

describe('test App.tsx', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should success increment count when click button', async () => {
    const span = wrapper.find('span').first();
    expect(span.text()).toEqual('count is 0');
    wrapper.find('button').first().simulate('click');
    await (() => {
      expect(span.text()).toEqual('count is 1');
    });
  });
});
