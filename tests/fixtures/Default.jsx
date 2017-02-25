import React, {PropTypes} from 'react';

const propTypes = {
  content: PropTypes.string
}

const DefaultFixture = (props) => (
  <div>{props.content}</div>
);

DefaultFixture.propTypes = propTypes;
export default DefaultFixture;
