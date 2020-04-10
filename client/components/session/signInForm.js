import React, { Component } from "react";

export default class signInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(input) {
    return (event) => {
      return this.setState({ [input]: event.target.value });
    };
  }

  renderErrors() {
    if (this.props.errors.length) {
      return (
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li key={`${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user).then((user) => console.log(user));
  }

  render() {
    const { formType } = this.props;
    return (
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              onChange={this.updateInput("email")}
              value={this.state.email}
            ></input>
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={this.updateInput("password")}
              value={this.state.password}
            ></input>
          </label>
          <button>{formType}</button>
        </form>
        <div>{this.renderErrors()}</div>
      </div>
    );
  }
}
