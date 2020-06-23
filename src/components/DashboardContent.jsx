import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import axiosWithAuth from '../utils/axiosWithAuth';
import Resource from '../components/Resource';

const useStyles = makeStyles({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tableContainer: {
    width: '75%',
  },
  table: {
    display: 'flex',
    justifyContent: 'center',
  },
  resourceHeader: {
    display: 'flex',
    width: '75%',
    justifyContent: 'space-between',
    margin: '30px auto 0px auto',
    alignItems: 'center',
  },
});

const DashboardContent = () => {
  const classes = useStyles();
  const [resources, setResources] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [err, setErr] = useState();
  const user = useSelector((state) => {
    return state.user.user;
  });

  // Make call to resources for this user and map through and display
  useEffect(() => {
    axiosWithAuth()
      .post('/api/resources/user', { email: 'demo_user@demo.com' })
      .then((res) => {
        console.log('resource res', res);
        setResources(res.data);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
      });
  }, [user, refresh]);

  return err ? (
    <>
      <p>You don't have any resources yet! Add one now! </p>
      <Button variant="outlined" color="primary">
        Add Resource
      </Button>
    </>
  ) : (
    <div>
      <div className={classes.resourceHeader}>
        <h1>Resources</h1>
        <Button variant="outlined" color="primary">
          Add A Resource
        </Button>
      </div>
      <div className={classes.table}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table aria-label="resource table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Last Checked</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources &&
                resources.map((resource) => (
                  <Resource
                    key={resource.id}
                    resource={resource}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DashboardContent;
