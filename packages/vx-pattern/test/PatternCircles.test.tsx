import React from 'react';
import { mount } from 'enzyme';

import { PatternCircles } from '../src';

describe('<PatternCircles />', () => {
  beforeEach(() => {
    global.console.error = jest.fn();
  });

  test('it should be defined', () => {
    expect(PatternCircles).toBeDefined();
  });

  test('it should require an id prop', () => {
    mount(<PatternCircles width={4} height={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `id` is marked as required in `PatternCircles`, but its value is `undefined`.\n    in PatternCircles',
    );
  });

  test('it should require a width prop', () => {
    mount(<PatternCircles id="test" height={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `width` is marked as required in `PatternCircles`, but its value is `undefined`.\n    in PatternCircles',
    );
  });

  test('it should require a height prop', () => {
    mount(<PatternCircles id="test" width={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `height` is marked as required in `PatternCircles`, but its value is `undefined`.\n    in PatternCircles',
    );
  });

  test('it should render a rect background if background prop defined', () => {
    const wrapper = mount(<PatternCircles id="test" height={4} width={4} background="blue" />);
    expect(wrapper.find('rect')).toHaveLength(1);
  });

  test('it should not render a rect background if no background prop', () => {
    const wrapper = mount(<PatternCircles id="test" height={4} width={4} />);
    expect(wrapper.find('rect')).toHaveLength(0);
  });
});
