import React from 'react';
import './Register.css';
import authRequests from '../../firebaseRequests/auth';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  }

  emailChange = (e) => {
    const tempUser = {...this.state.user};
    tempUser.email = e.target.value;
    this.setState({user: tempUser});
  };

  passwordChange = (e) => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({user: tempUser});
  };

  registerEvent = (e) => {
    const {user} = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/mystuffs');
      })
      .catch((err) => {
        console.error('Error in registering:',err);
      });
  };

  render () {
    const {user} = this.state;
    return (
      <div className="Register">
        <div className="Register">
          <div id="login-form">
            <h1 className="text-center">Register</h1>
            <form className="form-horizontal col-sm-6 col-sm-offset-3">
              <div className="form-group">
                <label htmlFor="inputEmail" className="col-sm-4 control-label">
                  Email:
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    value={user.email}
                    onChange={this.emailChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="col-sm-4 control-label">
                  Password:
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    value={user.password}
                    onChange={this.passwordChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <Link to="/login">Need to Login?</Link>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-default col-xs-12"
                    onClick={this.registerEvent}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default Register;
