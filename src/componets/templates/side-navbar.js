import React, { Component } from 'react';
import NavBarSection  from "../atoms/navbar-section";
import logo from '../../logo.svg';

class SideNavBar extends Component {
    render() {
      return (
        <div className="side-navbar">
            <div className="side-navbar-logo">
                <a href="#">
                    <img src={logo} />
                    <p>PennyGrow</p>
                </a>
            </div>
           <NavBarSection data={
               {
                   title: 'Reports',
                   items: [
                       {link: '#', title: 'Users Report', isActive: 'active'},
                       {link: '#', title: 'Transactions Report'}
                    ]
               }
           } />
           <NavBarSection data={
               {
                   title: 'Management',
                   items: [
                       {link: '#', title: 'User Management', isActive: ''},
                       {link: '#', title: 'Investment Management', isActive: ''},
                       {link: '#', title: 'Transactions Managemnt'}
                ]
               }
           } />
           <NavBarSection data={
               {
                   title: 'Requests',
                   items: [
                       {link: '#', title: 'Investment Requests', isActive: ''},
                       {link: '#', title: 'Emergency Funds Requests', isActive: ''}
                ]
               }
           } />
        </div>
      );
    }
  }
  
  export default SideNavBar;