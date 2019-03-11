import React, { Component } from 'react';
import SideNavBar from "../componets/templates/side-navbar";

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
         <div className="col-md-2" style={{paddingRight:0}}>
            <SideNavBar />
         </div>
         <div className="col-md-9">
            
         </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
