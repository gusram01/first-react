import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';


describe('GifExpertApp tests', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  test('Should render GifExpertApp correctly', () => {
    wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render categories array', () => {

    const categories = ['Dragon Ball', 'One Punch'];
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  });

});