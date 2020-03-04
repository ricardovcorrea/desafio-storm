import React from "react";
import "./Drawer.scss";

import Drawer from "@material-ui/core/Drawer";

const CustomDrawer = props => {
  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      Drawer content
    </Drawer>
  );
};

export default CustomDrawer;
