import React, { Component, Fragment } from 'react';
import Input from '../atoms/input'; 
import { connect } from "react-redux";  
import { Redirect } from "react-router-dom"; 

import gql from 'graphql-tag';  
import { Query } from 'react-apollo';
import axios from "axios";



const mapStateToProps = state => ({
  state: state.auth
});

const mapDispatchToProps = dispatch => ({
  dispatch: (data) => dispatch(data)
});

const loginQuery =  (email,password) =>  { 

  console.log(email,password);
  const QUERY = gql`
      {
        login(
          password: "${password}"
          email: "${email}m"
          type: "investor") {
          status
          message
          token
          details {
            id
            email
            fullname
          }
        }
      }
    `;
 return ( 
    <Query query={QUERY}>
        { ({data,error,loading}) => (
          <Fragment> 
            {console.log(data,error,loading)}
          </Fragment>
        ) }
      </Query>
  );
}

const form = (props) =>{ 
    var email;
    var password;

    return (
    <div className="login-form">
            <h2>Login to system</h2>
            {props.error ? (<p className="text-danger"> {props.error} </p>) : (<Fragment></Fragment>) }
            <p>This is a secured site please enter your assigned login details or contact the developers</p>
        <form onSubmit={(e)=> {
            e.preventDefault();  
            loginQuery(email.value,password.value) }}> 
           <Input data={(input)=>email = input} label="enter email" type="email" /> 
           <Input data={(input)=>password = input} label="enter password" type="password" /> 
           <div className="row">
               
               <div className="col-md-12">
               <button className="btn btn-primary btn-block btn-circle" type="submit"> Login </button>
               </div>
           </div>
            
        </form>
    </div>
);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(form);
