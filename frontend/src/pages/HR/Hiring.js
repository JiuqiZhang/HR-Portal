import {
  TextField,
  Box,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import Card from "../../components/Card";
import React from "react";
export default function Hiring() {
  function Registration() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [rows, setRows] = React.useState(
      [{ name: "John", email: "John@bf.com", status: null },
      { name: "Jn", email: "Jn@bf.com", status: "registered" },
      { name: "Cena", email: "cena@bf.com", status: "registered" }]
    );

    function sendToken() {
      setRows(oldArray => [{ name: name, email: email, status: "pending" }, ...oldArray ]);
      console.log(rows);
      alert(name + " with" + email + " has received the token.");
      setEmail("");
      setName("");
    }
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h3 style={{ textAlign: "left" }}>Registration Invitation</h3>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ alignSelf: "start" }}
          />
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ alignSelf: "start", ml: 2 }}
          />
          <Button
            sx={{ ml: 4 }}
            variant="contained"
            onClick={() => {
              sendToken();
            }}
          >
            Send
          </Button>
        </Box>

        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  }
  return (
    <div>
      <Card content={<Registration />} />
    </div>
  );
}
