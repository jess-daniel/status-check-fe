import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import axiosWithAuth from '../utils/axiosWithAuth';
import Resource from '../components/Resource';
import {
  FETCH_RESOURCES,
  RESOURCE_SUCCESS,
  RESOURCE_FAILURE,
} from '../actions/types';

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
  dashButton: {
    width: '15%',
    margin: '0 auto',
  },
});

const DashboardContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [refresh, setRefresh] = useState(false);
  const { user, resources } = useSelector((state) => state);

  // Make call to resources for this user and map through and display
  useEffect(() => {
    if (user.profile.email === undefined) return;
    console.log('email', user.profile.email);
    dispatch({ type: FETCH_RESOURCES });
    axiosWithAuth()
      .post('/api/resources/user', { email: user.profile.email })
      .then((res) => {
        console.log('resource res', res);
        dispatch({ type: RESOURCE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: RESOURCE_FAILURE, payload: err });
      });
  }, [user, refresh]);

  const goAdd = () => {
    history.push('/add-resource');
  };

  // if (resources.fetchingResources === true) {
  //   return <p>Loading...</p>;
  // }

  return resources.error ? (
    <>
      <p>You don't have any resources yet! Add one now! </p>
      <Button
        className={classes.dashButton}
        onClick={goAdd}
        variant="outlined"
        color="primary"
      >
        Add Resource
      </Button>
    </>
  ) : (
    <div>
      <div className={classes.resourceHeader}>
        <h1>Resources</h1>
        <Button onClick={goAdd} variant="outlined" color="primary">
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
                resources.resources.map((resource) => (
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
