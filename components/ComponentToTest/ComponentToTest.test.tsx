/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ComponentToTest, { ComponentToTestProps } from './ComponentToTest';

let componentToTest: ShallowWrapper;
const defaultProps: ComponentToTestProps = {
  id: 'jest-test',
};

describe('<ComponentToTest />', () => {
  beforeEach(() => {
    componentToTest = shallow(<ComponentToTest {...defaultProps} />);
  });

  it('should render correct HTML element', () => {
    expect(componentToTest).toMatchSnapshot();
    expect(componentToTest.find('div')).toHaveLength(1);
  });
});
