import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Details from "../pages/Details";

const Router = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route path="/add" element={<Add />} />
  
        <Route path="/details/:id" element={ <Details /> } />
        
        <Route path="/edit/:id" element={<Edit />} />
        
      </Routes>
    );
  };
  
  export default Router;
  