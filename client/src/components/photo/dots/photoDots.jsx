import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dot from './dot.jsx';

const DotWrapper = styled.div`
  margin-top: 75%;
  height: 12px;
  max-width: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: transform 500ms ease;
  transform: translateX(-${(props) => props.dotIdx * 12}px);
`;

const PhotoDots = ({ idx, length }) => {
  const dotArr = [];
  const dotIdx = Math.max(0, Math.min(length - 5, idx - 2));

  for (let i = 0; i < length; i += 1) {
    let selected = false;
    let small = true;
    if (idx === i) selected = true;
    if (i === 0 || i === length - 1) small = false;
    if (i > idx - 2 && i < idx + 2) small = false;
    if ((i < 4 && i > idx) || (i > length - 5 && i < idx)) small = false;
    dotArr.push([small, selected]);
  }

  return (
    <DotWrapper>
      <Dots dotIdx={dotIdx}>
        {dotArr.map((params, index) => (
          <Dot small={params[0]} selected={params[1]} key={index} />
        ))}
      </Dots>
    </DotWrapper>
  );
};

PhotoDots.propTypes = {
  length: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
};

export default PhotoDots;
