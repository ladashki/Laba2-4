import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });


describe('indirectly testing click simulation', () => {
  it('should ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('quote')).toBe(null);
  });
});
