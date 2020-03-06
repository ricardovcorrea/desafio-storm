import React from "react";
import "./Footer.scss";

import Icon from "@material-ui/core/Icon";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="onAir">
        <Icon className="onAirIcon">radio_button_checked</Icon>
        NO AR
      </div>
      <div className="triangleEdge"></div>
      <div className="onAirProgramName">
        <Icon className="onAirProgramIcon">personal_video</Icon>
        ENCONTRO - 10:00
      </div>
      <div className="lastUpdate">
        <Icon className="lastUpdateIcon">update</Icon>
        Última atualização em 10:28
      </div>
      <div className="grow"></div>
      <div className="date">
        Quinta, <span className="dateBold"> 30 </span>de
        <span className="dateBold"> Maio </span>de
        <span className="dateBold"> 2019 </span>
      </div>
      <div className="time">// 10:30:42</div>
    </div>
  );
};

export default Footer;
