import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory tests', () => {

  const setCategories = jest.fn();
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should render AddCategory correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('input text change value', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', {
      target: { value }
    });
  });

  test('shold not post info on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean input text', () => {
    const value = 'something';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').
      simulate('submit', { preventDefault() { } });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });

});
