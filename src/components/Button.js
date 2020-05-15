import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  if (props.isEditing) {
    return (
      <button  onClick={props.toggleIsEditingAt}>
        save
      </button>
    );
  }
  return (
    <button  onClick={props.handleRemove}>
      x
    </button>
  );
};

Button.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Button;
