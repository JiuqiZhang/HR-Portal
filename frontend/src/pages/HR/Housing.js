// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
// export default function Housing(props) {
//   const rows = [
//    {
//     address:'343 gold street',
//     landlord:{
//         name:'J Z',
//         number: 9999999999,
//         email: 'jz@bf.com'
//     },
//     numberOfResidence: 5
//    },
//    {
//     address:'333 gold street',
//     landlord:{
//         name:'J Z',
//         number: 9999999999,
//         email: 'jz@bf.com'
//     },
//     numberOfResidence: 5
//    }


//   ];
//   function HousingTable() {
//     return (
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Address</TableCell>
//               <TableCell>Landlord Name</TableCell>
//               <TableCell>Landlord Number</TableCell>
//               <TableCell>Landlord Email</TableCell>
//               <TableCell># of Residents</TableCell>
//               <TableCell>Delete</TableCell>
//               <TableCell>Summary View</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.address}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell>{JSON.stringify(row.address)}</TableCell>
//                 <TableCell>{JSON.stringify(row.landlord.name)}</TableCell>
//                 <TableCell>{JSON.stringify(row.landlord.number)}</TableCell>
//                 <TableCell>{JSON.stringify(row.landlord.email)}</TableCell>
//                 <TableCell>{JSON.stringify(row.numberOfResidence)}</TableCell>
//                 <TableCell>{'123'}</TableCell>
//                 <TableCell>{1}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }


  
//   return (
//     <div>
//       <h1>Housing</h1>
//       <HousingTable />
//     </div>
//   );
// }

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { bgcolor } from "@mui/system";
// {/* <TableCell>Address</TableCell> */}
//               <TableCell>Landlord Name</TableCell>
//               <TableCell>Landlord Number</TableCell>
//               <TableCell>Landlord Email</TableCell>
//               <TableCell># of Residents</TableCell>
//               <TableCell>Delete</TableCell>
//               <TableCell>Summary View</TableCell>
const columns = [
  { field: 'address', headerName: 'Address', description: 'Housing address.',width: 300, },
  { field: 'landlord', headerName: 'Landlord',width: 400, },
  {
    field: 'residents',
    headerName: '# of Residents',
    description: 'Total number of residents.',
    width: 160,
  },
//   {
//     field: 'summary',
//     headerName: 'Summary View',
//   },
//   {
//     field: 'delete',
//     headerName: 'Delete',
//   }
];

const rows = [
  { id:0, address: '343 park view ave', landlord: {name:'Snow', landlordNumber: 9999999999, email: 'asn@mnas.com'}, residents:4, },
  { id:1, address: '343 park view ave', landlord: {name:'Snow', landlordNumber: 9999999999, email: 'asn@mnas.com'}, residents:4, },
  { id:2, address: '343 park view ave', landlord: {name:'Snow', landlordNumber: 9999999999, email: 'asn@mnas.com'}, residents:4, },

];

export default function Housing() {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight:'80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{backgroundColor:'white'}}
      />
      </Box>
  );
}