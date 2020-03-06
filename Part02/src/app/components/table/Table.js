import React from "react";
import "./Table.scss";

import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";

import moment from "moment";

import Pagination from "../pagination/Pagination";

const CustomTable = props => {
  return (
    <React.Fragment>
      <Paper>
        <TableContainer>
          <Table size={"medium"}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>USUÁRIO</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell className={"centerText"}>DATA DE INCLUSÃO</TableCell>
                <TableCell className={"centerText"}>
                  DATA DE ALTERAÇÃO
                </TableCell>
                <TableCell className={"centerText"}>REGRAS</TableCell>
                <TableCell className={"centerText"}>STATUS</TableCell>
                <TableCell padding="checkbox"></TableCell>
                <TableCell className={"centerText"}>AÇÕES</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {!props.isLoading &&
                props.users.map((row, index) => {
                  return (
                    <TableRow key={row.name} className={"row"}>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell className={"centerText"}>
                        {moment(row.createDate).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell className={"centerText"}>
                        {moment(row.changeDate).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell className={"centerText"}>
                        {row.rules}
                      </TableCell>
                      <TableCell className={"centerText"}>
                        <span
                          style={
                            row.status ? { color: "green" } : { color: "red" }
                          }
                        >
                          {row.status ? "ATIVO" : "INATIVO"}
                        </span>
                      </TableCell>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell className={"centerText"}>
                        <Icon>more_horiz</Icon>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          {props.isLoading && <LinearProgress />}
        </TableContainer>
      </Paper>
      {!props.isLoading && <Pagination pages={1} />}
    </React.Fragment>
  );
};

CustomTable.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
};

export default CustomTable;
