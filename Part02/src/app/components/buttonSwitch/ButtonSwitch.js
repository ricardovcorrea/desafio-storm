import React from "react";
import "./ButtonSwitch.scss";

import clsx from "clsx";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ButtonSwitch = () => {
  return (
    <ButtonGroup color="primary" className={"buttonSwitchGroup"}>
      <Button className={"buttonSwitch"}>
        <Icon>security</Icon>
      </Button>
      <Button className={clsx("buttonSwitch", "buttonSwitchSelected")}>
        <Icon className={"buttonSwitchSelectedIcon"}>person</Icon>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSwitch;
