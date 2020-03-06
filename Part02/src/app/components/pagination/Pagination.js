import React from "react";
import "./Pagination.scss";

import Button from "@material-ui/core/Button";
import CustomButtom from "../button/Button";

const Pagination = () => {
  return (
    <div className="pagination">
      <Button
        disableElevation
        variant="contained"
        className="paginationButtonInactive"
      >
        Primeiro
      </Button>
      <Button
        disableElevation
        variant="contained"
        className="paginationButtonInactive"
      >
        Anterior
      </Button>
      <CustomButtom bgColor="#D83367" color="white" text="1" />
      <Button
        disableElevation
        variant="contained"
        className="paginationButtonInactive"
      >
        Próximo
      </Button>
      <Button
        disableElevation
        variant="contained"
        className="paginationButtonInactive"
      >
        Último
      </Button>
    </div>
  );
};

export default Pagination;
