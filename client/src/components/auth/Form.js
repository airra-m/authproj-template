//  ***** This is a separate component for the form *****

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

// Import your action
//import { registerUser } from "../../actions/authActions";

/*

class Form extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {

    const { errors } = this.state;

    return <div>

      <div className="form-row">

        <div className="col">
          <input
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("form-control", {invalid: errors.name})}
            placeholder="Full Name" />
            <span style={{color: "#8A0606"}}>{errors.name}</span>
        </div>

        <div className="col">
          <input
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
            id="email"
            type="email"
            className={classnames("form-control", {invalid: errors.email})}
            placeholder="Email" />
            <span style={{color: "#8A0606"}}>{errors.email}</span>
        </div>

        <button
          onClick={this.onSubmit}
          className="btn btn-outline-light"
          type="submit"
          id="button-addon2"
        > Submit </button>

      </div>

    </div>

  }

};

Form.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Form));;

*/
