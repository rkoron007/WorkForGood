import React, { Component } from "react";
import { renderErrors } from "../../util/util";

export default class signUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.workerInputs = this.workerInputs.bind(this);
    this.companyInputs = this.companyInputs.bind(this);
  }

  updateInput(input) {
    return (event) => {
      return this.setState({ [input]: event.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user).then((user) => console.log(user));
  }

  companyInputs() {
    return (
      <div>
        <label>
          Mission Statement
          <input
            onChange={this.updateInput("missionStatement")}
            value={this.state.missionStatement}
          ></input>
        </label>
        <label>
          Work Field
          <input
            onChange={this.updateInput("workField")}
            value={this.state.workField}
          ></input>
        </label>
        <label>
          EIN
          <input
            onChange={this.updateInput("ein")}
            value={this.state.ein}
          ></input>
        </label>
      </div>
    );
  }
  workerInputs() {
    return (
      <div>
        <label>
          Last Name
          <input
            onChange={this.updateInput("lastName")}
            value={this.state.lastName}
          ></input>
        </label>
        <label>
          Occupation
          <input
            onChange={this.updateInput("occupation")}
            value={this.state.occupation}
          ></input>
        </label>
        <label>
          Fields of Interest
          <input
            onChange={this.updateInput("fieldsOfInterest")}
            value={this.state.fieldsOfInterest}
          ></input>
        </label>
      </div>
    );
  }

  render() {
    const { formType, errors, formFor } = this.props;
    const formInputs =
      formFor === "worker" ? this.workerInputs : this.companyInputs;
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
          <label>
            Name
            <input
              onChange={this.updateInput("name")}
              value={this.state.name}
            ></input>
          </label>
          {formInputs()}
          <label>
            Description
            <textarea
              onChange={this.updateInput("description")}
              value={this.state.description}
            />
          </label>
          <label>
            Website URL
            <input
              onChange={this.updateInput("websiteUrl")}
              value={this.state.websiteUrl}
            ></input>
          </label>
          <label>
            City
            <input
              onChange={this.updateInput("city")}
              value={this.state.city}
            ></input>
          </label>
          <button>{formType}</button>
        </form>
        <div>{renderErrors(errors)}</div>
      </div>
    );
  }
}
