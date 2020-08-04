import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  line-height: 20px;
  width: 100%;
  padding: 2px;
  :hover {
    cursor: pointer;
  }
`;

const LineOneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  line-height: 18px;
  max-height: 18px;
  width: 100%;
  font-weight: 300;
  font-size: 12px;
  color: #707070;
`;

const LineTwoWrapper = styled.div`
  display: flex
  justify-content: flex-start;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  max-height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LineThreeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-top: 2px;
  line-height: 18px;
  max-height: 18px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TypeWrapper = styled.div`
  display: flex;
  align-itms: center;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Plus = styled.img`
  height: 17px;
  margin-top: 1px;
  margin-right: 4px;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Star = styled.img`
  margin-top: -2px;
`;

const Rating = styled.div`
  padding: 3px;
  font-weight: 500;
  color: black;
`;

const Price = styled.div`
  font-weight: 600;
  padding-right: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Info = ({ home }) => (
  <InfoWrapper>
    <LineOneWrapper className="lineOne">
      <TypeWrapper>
        {home.is_plus ? <Plus src={'https://airbnb-project-photos.s3.amazonaws.com/site+media/plus.png'} alt="plus" /> : null}
        {`${home.home_type} · ${home.beds} beds`}
      </TypeWrapper>
      <RatingWrapper className="ratingWrapper">
        <Star src={home.is_plus ? 'https://airbnb-project-photos.s3.amazonaws.com/site+media/plus_star.png' : 'https://airbnb-project-photos.s3.amazonaws.com/site+media/red_star.png'} alt="star" height="13" width="13" />
        <Rating className="rating">{home.rating}</Rating>
        {` (${home.rating_num})`}
      </RatingWrapper>
    </LineOneWrapper>
    <LineTwoWrapper className="lineTwo">
      {`${home.title}`}
    </LineTwoWrapper>
    <LineThreeWrapper className="lineThree">
      <Price className="price">{`$${home.price} `}</Price>
      {'  / night'}
    </LineThreeWrapper>
  </InfoWrapper>
);

Info.propTypes = {
  home: PropTypes.object.isRequired,
};

export default Info;