import React from "react";
import "./IconButton.scss";

import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const CustomIconButton = props => {
  return (
    <IconButton aria-label="delete">
      <Icon>{props.icon}</Icon>
    </IconButton>
  );
};

CustomIconButton.propTypes = {
  icon: PropTypes.string
};

export default CustomIconButton;
