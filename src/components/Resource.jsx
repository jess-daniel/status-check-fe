import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { makeStyles } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  capital: {
    textTransform: 'capitalize',
  },
  statusUp: {
    backgroundColor: 'green',
    color: 'white',
  },
  statusDown: {
    backgroundColor: 'red',
    color: 'white',
  },
});

const Resource = ({ resource, setRefresh, refresh }) => {
  const classes = useStyles();
  const alert = useAlert();

  const deleteResource = (item) => {
    console.log('item', item);
    axiosWithAuth()
      .delete(`/api/resources/${item.resource_id}`)
      .then((res) => {
        console.log('del res', res);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const showAlert = () => {
    alert.show(
      'This will remove your resource from being monitored. Click delete to proceed.',
      {
        title: 'Confirm',
        actions: [
          {
            copy: 'Delete',
            onClick: () => deleteResource(resource),
          },
        ],
      }
    );
  };

  return (
    <TableRow hover>
      <TableCell className={classes.capital} component="th" scope="row">
        {resource.name}
      </TableCell>
      <TableCell align="center">{resource.link}</TableCell>
      <TableCell
        className={
          resource.status === true ? classes.statusUp : classes.statusDown
        }
        align="center"
      >
        {resource.status === true ? 'Up' : 'Down'}
      </TableCell>
      <TableCell align="center">{resource.last_check || 'null'}</TableCell>
      <TableCell>
        <Tooltip title="Delete">
          <IconButton onClick={() => showAlert(resource)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default Resource;
