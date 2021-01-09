import React from "react";

import { makeStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  capital: {
    textTransform: "capitalize",
  },
  statusUp: {
    backgroundColor: "green",
    color: "white",
  },
  statusDown: {
    backgroundColor: "red",
    color: "white",
  },
});

const LogRecord = ({ log }) => {
  const classes = useStyles();
  return (
    <TableRow hover>
      <TableCell className={classes.capital} component="th" scope="row">
        {log.name}
      </TableCell>
      <TableCell align="center">{log.link}</TableCell>
      <TableCell
        className={log.status === true ? classes.statusUp : classes.statusDown}
        align="center"
      >
        {log.status === true ? "Up" : "Down"}
      </TableCell>
      <TableCell align="center">{log.code || "null"}</TableCell>
      <TableCell align="center">{log.last_check || "null"}</TableCell>
    </TableRow>
  );
};

export default LogRecord;
