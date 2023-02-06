import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import API from '../../api';
import { useDispatch,useSelector } from "react-redux";
import {useParams} from "react-router-dom";

import { logInHR, logInEmloyee } from "../../redux/user";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
       {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/JiuqiZhang">
        9ussel7hang
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [password1, setPassword1] = React.useState("")
  const dispatch = useDispatch()
  const {id} = useParams();
  const handleSubmitALL = (event) => {
    if (password1!== password){
      alert("Passwords don't match. Please check.")
      return
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info ={
      email: data.get("email"),
      password: data.get("password"),
    }
    console.log(info);
    API.post(`/hr/signIn`, info)
      .then((response) => {
        // console.log(response);
        alert("Welcome, " + response.data.name)
        if (response.data.identity === "HR"){
          dispatch(logInHR({name:response.data.name, email:response.data.email}))
        }else{
          dispatch(logInEmloyee({name:response.data.name, email:response.data.email}))
        }
        
        // const name = useSelector(state => state.user.name)
        // console.log(name)
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info ={
      email: data.get("email"),
      password: data.get("password"),
      token:id
    }
    console.log(info);
    API.post(`/employee_profile/signUp`, info)
      .then((response) => {
        // console.log(response);
        alert("Welcome, " + response.data.Name)
        dispatch(logInEmloyee({name:response.data.Name, email:response.data.email}))
        // const name = useSelector(state => state.user.name)
        // console.log(name)
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Beaconfire - Sign in
            </Typography>
            <Typography component="h1" variant="h5">
            </Typography>



           

            <Box
              component="form"
              noValidate
              onSubmit={id?handleSubmit:handleSubmitALL}
              sx={{ mt: 1 }}
            >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value = {email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value = {password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                {id?(<TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password1"
                  label="Re-enter Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value = {password}
                  onChange={(e)=>{setPassword1(e.target.value)}}
                />):null}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                 
                >
                  Sign In
                </Button>
                </Box>


             
              <Copyright sx={{ mt: 5 }} />

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
