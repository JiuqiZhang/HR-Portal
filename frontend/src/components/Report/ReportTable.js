import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommentModal from "./CommentModal";
import EditReportModal from './EditReportModal'

function createData(
  title,
  description,
  creater,
  timestamp,
  status
) {
  return { title, description, creater, timestamp, status };
}

const rows = [
  createData('Garbage disposal', "Garbage disposal isn't working", "Jane", "2022‑01‑27 17:45:30.005", "Open"),
  createData('Kitchen Light', "Kitchen Light isn't working", "Jane", "2022‑01‑28 17:45:30.005", "Closed"),
  createData('Microwave', "Microwave isn't working", "Jane", "2022‑01‑29 17:45:30.005", "Closed"),
  createData('Oven', "Oven isn't working", "Jane", "2022‑01‑30 17:45:30.005", "Open"),
];

export default function ReportTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Creater</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Edit report</TableCell>
            <TableCell>View comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={"row-"+index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.creater}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell><EditReportModal /></TableCell>
              <TableCell><CommentModal /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
