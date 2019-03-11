import React, { Component, Fragment } from 'react'; 
import { connect } from "react-redux"; 
import Form from '../componets/templates/login-form';
import { Redirect } from "react-router-dom";
import bg from  '../assets/cave.jpg';

import gql from 'graphql-tag';  
import { Query } from 'react-apollo';
import axios from "axios";

const mapStateToProps = state => ({
  state: state.auth
});

const mapDispatchToProps = dispatch => ({
  dispatch: (data) => dispatch(data)
});
const FormDisplay =  (props) => {
  return (
    <div className="row">
        <div className="col-md-4">
        <Form submit={props.loginQuery} error={props.error} />
        </div>
        <div className="col-md-8">
        <div className="login-side-bg" style={{backgroundImage:`url(${bg})`}}>
          <h1>
            welcome to <br /> PennyGrow 
          </h1>
        </div>
        </div>
    </div>
 );
}
class Login extends Component {
    constructor(props){
        super(props);
        this.state =  {

        }
    }  

  render() {

    if(this.props.state.auth){
        return (
            <Redirect to="/dashboard"></Redirect>
         );
    }else{
      return (  <FormDisplay loginQuery={this.loginQuery} /> );

    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
