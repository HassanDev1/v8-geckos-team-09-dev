import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, render, mount } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });

    it('should mount in a full DOM', () => {
      expect(mount(<App />).find('.App').length).toBe(1);
    });

    it('should be selectable by class "App"', () => {
      expect(shallow(<App />).is('.App')).toBe(true);
    });

    it('renders an `.clock-container`', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.clock-container')).toHaveLength(1);
    });
});



