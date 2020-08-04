import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Photo from './photo/photo.jsx';
import Info from './info/info.jsx';

const placeHolder = 'https://airbnb-project-photos.s3.amazonaws.com/site+media/photo_placeholder.svg'

const HomeWrapper = styled.span`
  display: flex;
  padding: 0.5%;
  min-width: 45.2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlaceHolderWrapper = styled.img`
  display: flex;
  padding: 0.5%;
  min-width: 45.2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Entry = ({
  home,
  index,
  photo,
  heart,
  hovered,
  displayPhoto,
  arrowClickHandler,
  photoClickHandler,
  photoHoverHandler,
  heartClickHandler,
}) => {
  if (!displayPhoto) return <PlaceHolderWrapper src={placeHolder} alt="placeholder" />
  return (
    <HomeWrapper className="homeWrapper">
      <Photo
        home={home}
        index={index}
        photo={photo}
        heart={heart}
        hovered={hovered}
        arrowClickHandler={arrowClickHandler}
        photoClickHandler={photoClickHandler}
        photoHoverHandler={photoHoverHandler}
        heartClickHandler={heartClickHandler}
      />
      <Info
        home={home}
      />
    </HomeWrapper>
  )
}

Entry.propTypes = {
  home: PropTypes.object.isRequired,
  photo: PropTypes.number.isRequired,
  heart: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  hovered: PropTypes.bool.isRequired,
  displayPhoto: PropTypes.bool.isRequired,
  arrowClickHandler: PropTypes.func.isRequired,
  photoClickHandler: PropTypes.func.isRequired,
  photoHoverHandler: PropTypes.func.isRequired,
  heartClickHandler: PropTypes.func.isRequired,
};

export default Entry;
