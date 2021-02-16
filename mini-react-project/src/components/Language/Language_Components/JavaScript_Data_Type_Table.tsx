import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(type: string, primOrRef: string, examples: String) {
  return { type, primOrRef, examples };
}

const rows = [
  createData('string', 'primitive', 'a, A, abc, @, æ, Δ'),
  createData('number', 'primitive', '1, -10, 3.2'),
  createData('boolean', 'primitive', 'true, false'),
  createData('object', 'reference', '{a: 1, b: 2, c: 3}'),
  createData('function', 'reference', "function() { console.log('hello'); }"),
  createData('undefined', 'primitive', 'undefined'),
];

export default function JavaScript_Data_Type_Table() {
  const classes = useStyles();

  return (
    <TableContainer style={{ overflow: 'hidden' }} id="roundCorner">
      <Table className={classes.table} aria-label="simple table" style={{ backgroundColor: '#FFFFFF' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1">
                <strong>Type</strong>
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1">
                <strong>Primitive or Reference</strong>
              </Typography>
            </TableCell>
            <TableCell align="left" style={{ paddingRight: 550 }}>
              <Typography variant="subtitle1">
                <strong>Examples</strong>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.type} hover={true}>
              <TableCell component="th" scope="row">
                <Typography variant="body1">{row.type}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1">{row.primOrRef}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1">{row.examples}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
