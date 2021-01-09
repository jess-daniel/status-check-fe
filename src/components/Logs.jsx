import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { FETCH_LOGS, LOGS_SUCCESS, LOGS_FAILURE } from "../actions/types";
import LogRecord from "./LogRecord";
import axiosWithAuth from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tableContainer: {
    width: "75%",
  },
  table: {
    display: "flex",
    justifyContent: "center",
  },
  logBackground: {
    backgroundColor: "#EFE2BA",
  },
  resourceHeader: {
    display: "flex",
    width: "75%",
    justifyContent: "space-between",
    margin: "30px auto 0px auto",
    alignItems: "center",
  },
});

const Logs = ({ user, dispatch, setRefresh }) => {
  // TODO add count down to update then refresh logs
  const classes = useStyles();
  const { logs } = useSelector((state) => state);
  console.log("user", user);

  useEffect(() => {
    if (user.user.id === undefined) return;
    dispatch({ type: FETCH_LOGS });
    axiosWithAuth()
      .get(`/api/logs/${user.user.id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: LOGS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOGS_FAILURE, payload: err });
      });
  }, []);

  console.log("logs", logs);

  return logs ? (
    <div className={classes.logBackground}>
      <h3>Logs</h3>
      <p>Your logs will appear here once we run your first status check!</p>
      <div className={classes.table}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table aria-label="log table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Last Checked</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs &&
                logs.logs.map((log) => <LogRecord key={log.id} log={log} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  ) : null;
};

export default Logs;
