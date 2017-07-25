import React from "react";
import Section from "./section";
import { Col, Row } from "../helpers/bootstrap";

export class ContactForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
  };

  state = { name: null, email: null, message: null };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  render() {
    return (
      <div className="neal-signup-inline">
        <form role="form" id="contactForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label for="name" className="h4 pull-left">Name</label>
              <input type="text" className="form-control" id="name"
                placeholder="First and Lastname" name="name"
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group col-sm-6">
              <label for="email" className="h4 pull-left">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email"
                name="email" onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="form-group">
            <label for="message" className="h4 pull-left">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Enter your message"
              name="message" onChange={this.handleChange} required></textarea>
          </div>
          <button type="submit" id="form-submit" className="btn btn-info btn-lg pull-right ">Submit</button>
        </form>
      </div>
    );
  }
}
