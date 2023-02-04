import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProfileModal from './ProfileModal'

function createData(
    name,
    ssn,
    workAuthorizationTitle,
    phone,
    email
) {
    return {
        name,
        ssn,
        workAuthorizationTitle,
        phone,
        email
    };
}

const rows = [
    createData('Jane', "321219911", "OPT", "5672197166", "jane@gmail.com"),
    createData('Ken', "521219911", "H1B", "8672197166", "ken@gmail.com"),
    createData('Mark', "421219911", "CPT", "3672197166", "mark@gmail.com"),
    createData('Zoe', "621219911", "OPT", "6672197166", "zoe@gmail.com"),
];

export default function ProfileTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>SSN</TableCell>
                        <TableCell>Work Authorization</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>View profile</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={"row-"+index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.ssn}</TableCell>
                            <TableCell>{row.workAuthorizationTitle}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell><ProfileModal /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
