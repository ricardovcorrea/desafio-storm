import React from "react";
import "./Button.scss";

import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const CustomButton = props => {
  const iconClass = props.text ? "iconWithText" : "";

  return (
    <Button
      variant="contained"
      className={"button"}
      style={{ backgroundColor: props.bgColor ? props.bgColor : "#fff" }}
      onClick={props.onClick}
    >
      {props.icon && (
        <Icon
          className={iconClass}
          style={{ color: props.color ? props.color : "" }}
        >
          {props.icon}
        </Icon>
      )}
      <span style={{ color: props.color ? props.color : "" }}>
        {props.text || ""}
      </span>
    </Button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;
