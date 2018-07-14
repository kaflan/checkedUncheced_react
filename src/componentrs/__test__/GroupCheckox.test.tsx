import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import CheckboxGroup from "../CheckboxGroup";

describe(`${<CheckboxGroup />}`, ()=> {
  it('render form', () => {
    const wrapper = mount(<CheckboxGroup />);
    expect(wrapper.find("form")).toHaveLength(1)
  })
  it('checkbox cliked', () => {
    const wrapper = mount(<CheckboxGroup />);
    expect(wrapper.find('input[type="checkbox"]').last().simulate("change")).toHaveLength(1)
  })
})
