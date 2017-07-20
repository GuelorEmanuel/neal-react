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
        <form className="form-inline row" onSubmit={this.handleSubmit}>
          <Row className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="name">First lastname</label>
            <input type="text" required className="form-control" name="name" placeholder="First and LastName"
                onChange={this.handleChange}/>
          </Row>
          <Row className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email" placeholder="Email"
              onChange={this.handleChange}/>
          </Row>
          <Col className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="message">Message</label>
            <input type="text" required className="form-control" name="message" placeholder="What's on your mind?"
              onChange={this.handleChange}/>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-2"]}>
            <button type="submit" className="btn btn-primary btn-ghost">Send</button>
          </Col>
        </form>
      </div>
    );
  }
}
