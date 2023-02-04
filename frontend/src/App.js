import "./styles/App.css";
// import Login from "./pages/Login/Login";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Main from "./pages/Main";
import EmployeeProfile from "./pages/HR/EmployeeProfile";


function App() {
  // const loggedIn = false;
  return (
    <div className="App">
      {/* <header className="App-header">


       
      </header> */}
      {/* <BrowserRouter>
          <Routes>
            
            <Route path="*" element={<Main/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter> */}
      <EmployeeProfile/>
    </div>
  );
}

export default App;
