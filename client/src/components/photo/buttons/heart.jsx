import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-nested-ternary */

const HeartWrapper = styled.div`
  background: transparent;
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  z-index: 1;
`;

const HeartImg = styled.img`
  background: transparent;
  height: 16px;
  width: 16px;
  margin-left: -2px;
  margin-top: 2px;
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  border-radius: 100%;
  text-align: center;
  background: white;
  height: 28px;
  width: 28px;
  box-shadow: 0px 0px 3px rgba(19, 19, 19, .5);
  opacity: ${(props) => props.heart ? '1' : '0.85'};
  :focus {
    outline: none;
  }
  :hover {
    transform: scale(1.05, 1.05);
    cursor: pointer;
    opacity: 1;
    box-shadow: 0px 0px 25px rgba(19, 19, 19, .5);
  }
  :active {
    box-shadow: none;
    opacity: 1;
    box-shadow: inset 0px 0px 3px rgba(19, 19, 19, .5);
  }
`;

const Heart = ({
  heart,
  hovered,
  index,
  clickHandler,
}) => (
  <HeartWrapper className="heartWrapper">
    {heart
      ? <Button heart={heart} className={`heartButton ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}>
          <HeartImg className={`heartButton ${(index - 1).toString()}`} src={'https://airbnb-project-photos.s3.amazonaws.com/site+media/filled_heart.png'} alt="heart" />
        </Button>
      : hovered
        ? <Button className={`heartButton ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}>
            <HeartImg className={`heartButton ${(index - 1).toString()}`} src={'https://airbnb-project-photos.s3.amazonaws.com/site+media/heart.png'} alt="heart" />
          </Button>
        : <div />}
  </HeartWrapper>
);

Heart.propTypes = {
  heart: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Heart;
