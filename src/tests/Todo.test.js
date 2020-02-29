import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';
import Todos from '../components/Todos';

configure({adapter: new Adapter()});
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Todos />);
    });
  
    it('should render to static HTML', () => {
      expect(render(<Todos />).text()).toEqual('Todos+');
    });

    it('should mount in a full DOM', () => {
      expect(mount(<Todos />).find('.todos-container').length).toBe(1);
    });

    it('should be selectable by class "todos-container"', () => {
      expect(shallow(<Todos />).is('.todos-container')).toBe(true);
    });

});