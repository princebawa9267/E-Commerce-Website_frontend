import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const accountStatues = [
  { status: "PENDING_VERIFICATION", title: "Pending Verification", description: "Account is not verified yet" },
  { status: "ACTIVE", title: "Active", description: "Account is active " },
  { status: "SUSPENDED", title: "Suspended", description: "Account is temporarily suspended" },
  { status: "DEACTIVATED", title: "Deactivated", description: "Account is deactivated" },
  { status: "BANNED", title: "Banned", description: "Account is permanently banned due to volition of guidelines" },
  { status: "CLOSED", title: "Closed", description: "Account is permanently closed, " }
]

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const SellerTable = () => {

  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (event) => {
    setAccountStatus(event.target.value)
  }

  return (
    <div className='space-y-4'>
    <div className='px-5 w-60'>
      <FormControl fullWidth>
        <InputLabel id="accountStatus">Account Status</InputLabel>
        <Select
          labelId="accountStatus"
          id="accountStatus"
          value={accountStatus}
          label="Account Status"
          onChange={handleChange}
        >
          {
            accountStatues.map((item) => <MenuItem key={item.status} value={item.status}>{item.title}</MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
    <div>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Seller Name</StyledTableCell>
                  <StyledTableCell>Emails</StyledTableCell>
                  <StyledTableCell align="right">Mobile</StyledTableCell>
                  <StyledTableCell align="right">GSTIN</StyledTableCell>
                  <StyledTableCell align="right">Account Status</StyledTableCell>
                  <StyledTableCell align="right">Change Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell >{row.calories}</StyledTableCell>
                    <StyledTableCell >{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
    </div>
  )
}

export default SellerTable
