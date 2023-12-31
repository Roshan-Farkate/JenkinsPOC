import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import IncDec from "./Components/IncDec";
import UserForm from "./Components/UserForm";
import HomePage from "./Components/HomePage";
import GetData from "./Components/GetData";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/incDec" element={<IncDec/>}/>
        <Route path="userForm" element={<UserForm/>}/>
        <Route path="getData" element={<GetData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
