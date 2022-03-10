import { shallow, ShallowWrapper } from 'enzyme';
import { Home } from './index';

describe('test Home page', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('snapshot test', function () {
    expect(wrapper).toMatchSnapshot();
  });

  it('should success increment count when click button', async () => {
    const strong = wrapper.find('strong').first();
    expect(strong.text()).toEqual('state is 0');
    wrapper.find('button').first().simulate('click');
    await (() => {
      expect(strong.text()).toEqual('state is 1');
    });
  });
});
