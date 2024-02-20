import React from "react";
import "./MainDeshboard.css";
import Sidebar1 from "../Components/Sidebar1/Sidebar1";
import Header from "../Components/Header/Header";
import Sidebar2 from "../Components/Sidebar2/Sidebar2";
import Rsidebar from "../Components/Rsidebar/Rsidebar";
import Dpost from "../Components/Dpost/Dpost";
import Headerpost from "../Components/Headerpost/Headerpost";
import Hnavbar from "../Components/Hnavbar/Hnavbar";

const MainDeshboard = () => {
  return (
    <div className="maindash_sec">
      <Hnavbar/>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar1 />
            <Sidebar2 />
          </div>
          <div className="col-md-6">
            <Headerpost/>
           <Dpost/>
          </div>
          <div className="col-md-3">
            <Rsidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainDeshboard;
