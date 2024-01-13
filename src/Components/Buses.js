import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(from, to, date, time, service) {
  return { from, to, date, time, service };
}
const rows = [
  createData('Kadapa','Bangalore','2023-12-09','04:24:19','6201'),
  createData('Kadapa','Bangalore','2023-12-09','06:10:19','6203'),
  createData('Kadapa','Bangalore','2023-12-09','08:20:19','6254'),
  createData('Kadapa','Bangalore','2023-12-09','10:40:19','6200'),
  createData('Kadapa','Bangalore','2023-12-09','11:00:19','5989'),
  createData('Kadapa','Bangalore','2023-12-09','12:20:19','6289'),
  createData('Kadapa','Bangalore','2023-12-09','13:24:19','6090'),
  createData('Kadapa','Bangalore','2023-12-09','15:24:19','6202'),
  createData('Kadapa','Bangalore','2023-12-09','17:30:00','6264'),
  createData('Kadapa','Bangalore','2023-12-09','20:10:00','7203'),
  createData('Kadapa','Bangalore','2023-12-09','22:00:00','8206'),
  createData('Kadapa','Bangalore','2023-12-09','24:00:00','9093'),
  
];

export default function Buses() {
  return (
    <TableContainer component={Paper}sx={{marginTop:10}}>
      <Table sx={{ minWidth:{md:700,xs:500} }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Service&nbsp;</StyledTableCell>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell>To</StyledTableCell>
            <StyledTableCell>Date&nbsp;</StyledTableCell>
            <StyledTableCell>Time&nbsp;</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.from}>
              <StyledTableCell >{row.service}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.from}
              </StyledTableCell>
              <StyledTableCell >{row.to}</StyledTableCell>
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.time}</StyledTableCell>
               <Button color='error' sx={{margin:1}}>Buy</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
