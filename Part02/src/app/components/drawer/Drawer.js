import React from "react";
import "./Drawer.scss";

import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import Button from "../button/Button";

const CustomDrawer = props => {
  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <div className="drawer">
        <div className="drawerHeader">
          <Icon className="drawerHeaderIcon">tune</Icon>
          <span className="drawerHeaderTitle">FILTROS</span>
          <div className="grow"></div>
          <Button onClick={() => props.onClose()} icon="close"></Button>
        </div>
        <div className="drawerBody">
          <span className="drawerText">
            Utilize os filtros abaixo para refinar os resultados da tabela,
            clique no botão APLICAR para salvar as alterações.
          </span>
          <div className="horizontalDivider">&nbsp;</div>
          <div className="filterBox">
            <div className="filterText">
              <Icon className="filterIcon">date_range</Icon>
              <div>TODAS AS DATAS DE INCLUSÃO</div>
            </div>
            <Icon className="drawerHeaderIcon">arrow_drop_down</Icon>
          </div>
          <div className="filterBox">
            <div className="filterText">
              <Icon className="filterIcon">date_range</Icon>
              <div>TODAS AS DATAS DE ALTERAÇÃO</div>
            </div>
            <Icon className="drawerHeaderIcon">arrow_drop_down</Icon>
          </div>
          <div className="filterBox">
            <div className="filterText">
              <Icon className="filterIcon">date_range</Icon>
              <div>ATIVOS E INATIVOS</div>
            </div>
            <Icon className="drawerHeaderIcon">arrow_drop_down</Icon>
          </div>
          <div onClick={() => props.onClose()} className="applyButton">
            APLICAR
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
