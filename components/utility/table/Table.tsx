import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import Button from '../button/Button';

const StyledTableCell = styled(TableCell)((_) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
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

function createData(date: string, title: string, action: number) {
  return { date, title, action };
}

const rows = [
  createData('29 Sept 2022', '159', 6.0),
  createData('29 Sept 2022', '237', 1),
  createData('29 Sept 2022', '262', 16.0),
  createData('29 Sept 2022', '305', 3.7),
  createData('29 Sept 2022', '356', 10.0),
];

export interface ITable {
  sampleTextProp: string;
  note: string;
}

const Table: React.FC<ITable> = ({ sampleTextProp, note }) => {
  return (
    <div>
      <h1
        className="pb-4 font-bold text-lg mt-5
           border-b-[#ADB5BD] border-b-2"
      >
        {sampleTextProp}
      </h1>

      <TableContainer>
        <TableMUI sx={{ minWidth: 700 }} aria-label="customized table">
          {/* <TableHead className="bg-[#0554F6]">
            <TableRow>
              <StyledTableCell className="text-white text-lg">
                Dessert (100g serving)
              </StyledTableCell>
              <StyledTableCell className="text-white text-lg" align="right">
                Calories
              </StyledTableCell>
              <StyledTableCell className="text-white text-lg" align="right">
                Fat&nbsp;(g)
              </StyledTableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.action}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="right">{row.title}</StyledTableCell>
                <StyledTableCell align="right">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TableMUI>
        <Button text="View More..."></Button>
      </TableContainer>

      <p className="mt-4">{note}</p>
    </div>
  );
};

export default Table;
