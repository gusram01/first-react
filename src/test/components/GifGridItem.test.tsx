import React from 'react';
import GifGridItem from '../../components/GiFGridItem';
import { shallow, ShallowWrapper } from 'enzyme';

describe('GifGridItem tests', () => {
  const dummyTest = {
    id: 'idTest',
    title: 'Dummy Test',
    url: 'https://This-i-a-dummy-url'
  };
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => { wrapper = shallow(<GifGridItem img={dummyTest} />) });


  test('should render GifGridItem correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('paragraph should have title ', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(dummyTest.title);
  });

  test('image should have src & alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(dummyTest.url);
    expect(img.prop('alt')).toBe(dummyTest.title);
  });

  test('should have classname animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.prop('className')?.includes('animate__fadeIn')).toBe(true);
  });
});