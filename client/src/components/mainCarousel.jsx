import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Entry from './entry.jsx';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: 320px;
  position: relative;
`;

const EntryWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: flex-start;
  transition: transform 500ms ease;
  transform: translateX(-${(props) => props.homeId * 46.2}%);
`;

const EntryWrapperWrapper = styled.div`
  height: inherit;
  width: 72%;
  overflow: hidden;
  max-width: 1050px;
`;

const Button = styled.button`
  border: none;
  height: 225px;
  min-width: 30px;
  padding: 10px;
  background: transparent;
  font-size: 200%;
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  position: relative;
  z-index: 1;
`;

const ButtonImg = styled.img`
  height: 35px;
  margin-top: 2px;
`;

const MainCarousel = ({
  homes,
  photos,
  hearts,
  homeId,
  leftButton,
  rightButton,
  hovered,
  bigClickHandler,
  littleClickHandler,
  photoClickHandler,
  photoHoverHandler,
  heartClickHandler,
}) => (
  <CarouselWrapper className="carouselWrapper">
    <Button className="bigLeft" onClick={(e) => bigClickHandler(e)}><ButtonImg className="bigLeft" src={leftButton ? 'https://airbnb-project-photos.s3.amazonaws.com/site+media/grey_left_arrow.png' : 'https://airbnb-project-photos.s3.amazonaws.com/site+media/blank_arrow.png'} alt="left" /></Button>
    <EntryWrapperWrapper className="entryWrapperWrapper">
      <EntryWrapper homeId={homeId}>
        {homes.map((home, index) => (
          <Entry
            key={index}
            home={home}
            index={index + 1}
            photo={photos[index]}
            heart={hearts[index]}
            displayPhoto={index > homeId - 2 && index < homeId + 4}
            hovered={hovered === index + 1}
            arrowClickHandler={littleClickHandler}
            photoClickHandler={photoClickHandler}
            photoHoverHandler={photoHoverHandler}
            heartClickHandler={heartClickHandler}
          />
        ))}
      </EntryWrapper>
    </EntryWrapperWrapper>
    <Button className="bigRight" onClick={(e) => bigClickHandler(e)}><ButtonImg className="bigRight" src={rightButton ? 'https://airbnb-project-photos.s3.amazonaws.com/site+media/grey_right_arrow.png' : 'https://airbnb-project-photos.s3.amazonaws.com/site+media/blank_arrow.png'} alt="right" /></Button>
  </CarouselWrapper>
);

MainCarousel.propTypes = {
  homes: PropTypes.arrayOf(PropTypes.object).isRequired,
  photos: PropTypes.arrayOf(PropTypes.number).isRequired,
  hearts: PropTypes.arrayOf(PropTypes.bool).isRequired,
  homeId: PropTypes.number.isRequired,
  leftButton: PropTypes.bool.isRequired,
  rightButton: PropTypes.bool.isRequired,
  hovered: PropTypes.number.isRequired,
  bigClickHandler: PropTypes.func.isRequired,
  littleClickHandler: PropTypes.func.isRequired,
  photoClickHandler: PropTypes.func.isRequired,
  photoHoverHandler: PropTypes.func.isRequired,
  heartClickHandler: PropTypes.func.isRequired,
};

export default MainCarousel;
