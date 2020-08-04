import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* eslint-disable no-confusing-arrow */

const DotStyle = styled.div`
  text-align: center;
  border-radius: ${(props) => props.small ? '6px' : '8px'};
  background: ${(props) => props.selected ? 'white' : 'grey'};
  min-height: ${(props) => props.small ? '6px' : '8px'};
  min-width: ${(props) => props.small ? '6px' : '8px'};
  max-height: ${(props) => props.small ? '6px' : '8px'};
  max-width: ${(props) => props.small ? '6px' : '8px'};
  margin: ${(props) => props.small ? '3px' : '2px'};
  opacity: 0.70;
`;

const Dot = ({ small, selected }) => (
  <DotStyle small={small} selected={selected} />
);

Dot.propTypes = {
  small: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Dot;
