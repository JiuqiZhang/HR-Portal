import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import API from '../../api';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Field, Form } from "formik";

import React from "react";
import Card from "../../components/Card";
// import { bgcolor } from "@mui/system";
// {/* <TableCell>Address</TableCell> */}
//               <TableCell>Landlord Name</TableCell>
//               <TableCell>Landlord Number</TableCell>
//               <TableCell>Landlord Email</TableCell>
//               <TableCell># of Residents</TableCell>
//               <TableCell>Delete</TableCell>
//               <TableCell>Summary View</TableCell>
const columns = [
  {
    field: "address",
    headerName: "Address",
    description: "Housing address.",
    width: 300,
  },
  { field: "landlord", headerName: "Landlord", width: 400 },
  {
    field: "residents",
    headerName: "# of Residents",
    description: "Total number of residents.",
    width: 160,
  },
  {
    field: "summary",
    headerName: "Summary View",
  },
  //   {
  //     field: 'delete',
  //     headerName: 'Delete',
  //   }
];

const rows = [
  {
    id: 0,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View</div>,
  },
  {
    id: 1,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View 2</div>,
  },
  {
    id: 2,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View 3</div>,
  },
];

export default function Housing() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
    console.log(data)
    // setRefresh(!refresh)
  };

  const handleClose = () => {
    var answer = window.confirm("Cancel without saving?");
if (answer) {
  setOpen(false);
}
  };

  React.useEffect(() => {
    console.log('refreshing')
    API.get(`hr/allHousing`)
    .then(response => setData(response.data))
    .then(console.log(data))
    .catch((error) => {
      alert(error);
    });
}, [refresh])
   
  function ModalDialog() {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>New Housing</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                address: "",
                landlordName: "",
                landlordPhone: "",
                landlordEmail: "",
                residents: "",
                beds: "",
                mattresses: "",
                tables: "",
                chairs: "",
              }}
              onSubmit={async (values) => {
                // alert(JSON.stringify(values));
                // const info = {
                //   address: values.address,
                //   roommates: [],
                //   reports: [],
                //   landlord: {
                //     name: values.landlordName,
                //     phoneNum: values.landlordPhone,
                //     email: values.landlordEmail,
                //   },
                //   facility: {
                //     beds: values.beds,
                //     tables: values.tables,
                //     mattresses: values.mattresses,
                //     chairs: values.chairs,
                //   },
                // };
                // alert(JSON.stringify(values));
                API.post(`hr/postHousing`, values)
                  .then((response) => {
                    console.log(response.data);
                  })
                  .then(setRefresh(!refresh))
                  .then(alert('Sent~'))
                  .catch((error) => {
                    alert(error);
                  });
                setOpen(false);
                
              }}
            >
              <Form>
               <Box sx={{display:'flex', flexDirection:'column'}}>
               <label htmlFor="address">Address</label>
                <Field
                  id="address"
                  name="address"
                  placeholder="343 gold street"
                />

                <label htmlFor="landlordName">Landlord Name</label>
                <Field
                  id="landlordName"
                  name="landlordName"
                  placeholder="Doe John"
                />

                <label htmlFor="landlordPhone">Landlord Phone</label>
                <Field
                  id="landlordPhone"
                  name="landlordPhone"
                  placeholder="xxxxxxxxxx"
                />
                <label htmlFor="landlordEmail">Landlord Email</label>
                <Field
                  id="landlordEmail"
                  name="landlordEmail"
                  placeholder="xxx@xxx.com"
                  type="email"
                />
                <label htmlFor="beds">Beds</label>
                <Field id="beds" name="beds" type="number" min="1" />
                <label htmlFor="mattresses">Mattresses</label>
                <Field id="mattresses" name="mattresses" type="number" />
                <label htmlFor="tables">Tables</label>
                <Field id="tables" name="tables" type="number" />
                <label htmlFor="chairs">Chairs</label>
                <Field id="chairs" name="chairs" type="number" />

                <button type="submit">Submit</button>
 
               </Box>
              </Form>
            </Formik>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  function Content(){
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "80%",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "20%", right: 0, m:2 }}
          onClick={handleClickOpen}
        >
          New Housing
        </Button>
        <ModalDialog />
  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>Landlord Name</TableCell>
                <TableCell>Landlord Email</TableCell>
                <TableCell>Landlord Number</TableCell>
                <TableCell>Residents</TableCell>
                <TableCell>Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index)=> (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.landlord.name}</TableCell>
                  <TableCell>{row.landlord.email}</TableCell>
                  <TableCell>{row.landlord.phoneNum}</TableCell>
                  <TableCell>{row.residents?(row.residents):0}</TableCell>
                  <TableCell><Button variant="contained" onClick={()=>{alert(JSON.stringify(row))}}>Summary</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  return (<Card content={<Content />}/>)
}
