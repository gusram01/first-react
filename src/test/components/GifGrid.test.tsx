import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid tests', () => {
  const category = 'something';
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  test('should render GifGrid correctly', () => {
    //@ts-expect-error
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render items when images is loaded from UseFetchGifs', () => {
    //@ts-expect-error
    useFetchGifs.mockReturnValue({
      data: [
        {
          id: 'ABC',
          url: 'https://somepage.com/some.jpg',
          title: 'some title'
        }
      ],
      loading: false
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(1);
  });
});