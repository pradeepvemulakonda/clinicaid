import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';

describe('Routes', () => {
  it('should render routes', () => {
    const component = <Routes />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
