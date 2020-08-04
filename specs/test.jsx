import React from 'react';
import styled from 'styled-components';
import { mount, shallow } from 'enzyme';

// Components
import Photo from '../client/src/components/photo';
import Info from '../client/src/components/info';

let home = {
  "home_id": 1,
  "title": "Pergola house with a pool",
  "home_type": "entire house",
  "beds": 12,
  "rating": 4.17,
  "rating_num": 95,
  "price": 29,
  "is_plus": 0,
  "photos": [
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-0ea2f48b",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-11ce293c",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-ee91458b",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-9eb5722f",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-b0a34c1c",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-0a278002",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-9a32a771",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-CCE03112",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-7674fc69",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-9562a822",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-a1f99d03",
      "https://airbnb-project-photos.s3.amazonaws.com/1/1-f07dac97"
  ]
};

function infoSetup(home) {
  const wrapper = shallow(<Info home={home}/>);
  return { wrapper };
}

function photoSetup(home) {
  let photo = 0;
  let homeId = 0;
  // let clickHandler = () => {};
  // let photoClickHandler = () => {};
  const wrapper = shallow(<Photo home={home} photo={photo} index={homeId}/>)
  return { wrapper };
}

describe('Photo Test Suite', () => {
  const { wrapper } = photoSetup(home);

  it('should have a PhotoWrapper', () => {
    expect(wrapper.find('.photoWrapper').exists()).toBe(true);
  });

  it('should have a ButtonWrapper', () => {
    expect(wrapper.find('.littleButtonWrapper').exists()).toBe(true);
  });

  it('should have a left arrow', () => {
    expect(wrapper.find('.leftButton').exists()).toBe(true);
  });

  it('should have a right arrow', () => {
    expect(wrapper.find('.rightButton').exists()).toBe(true);
  });

  it('should have a photo', () => {
    expect(wrapper.find('.homePhoto').exists()).toBe(true);
  })
});

describe('Info Test Suite', () => {
  const { wrapper } = infoSetup(home);

  it('should have a first line of text', () => {
    expect(wrapper.find('.lineOne').exists()).toBe(true);
  });
  it('first line of text should include type, beds, rating and number of ratings', () => {
    let homeType = home.home_type;
    let beds = home.beds;
    let rating = home.rating;
    let ratingNum = home.rating_num;
    expect(wrapper.find('.lineOne')).toHaveText(`${homeType} · ${beds} beds${rating} (${ratingNum})`);
  });

  it('should have a second line of text', () => {
    expect(wrapper.find('.lineTwo').exists()).toBe(true);
  });
  it('second line of text should be the house title', () => {
    let title = home.title;
    expect(wrapper.find('.lineTwo')).toHaveText(`${title}`);
  });

  it('should have a third line of text', () => {
    expect(wrapper.find('.lineThree').exists()).toBe(true);
  });
  it('third line of text should be the price per night', () => {
    let price = home.price;
    expect(wrapper.find('.lineThree')).toHaveText(`$${price}   / night`);
  });
});
