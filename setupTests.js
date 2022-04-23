// import Adapter from 'enzyme-adapter-react-16';
// 项目使用的是react17 这段配置代码来自https://github.com/ant-design/ant-design/blob/master/tests/setup.js
// 在 2020 年，enzyme 官方借 react17 未发布正式版本为由迟迟未进行 react17 适配器的开发，导致社区用户先开发了一个 react17 适配器
import '@testing-library/jest-dom/extend-expect';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import jsdom from 'jsdom';

// 设置react和enzyme的适配器
Enzyme.configure({
  adapter: new Adapter(),
});

// 配置给render挂载在global用到的dom对象
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = new JSDOM(``).window;
global.document = document;
global.window = window;
