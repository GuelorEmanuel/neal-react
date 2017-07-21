import React from "react";

export class Feature extends React.Component {

  static propTypes = {
    imageUrl: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
          <img className="img-responsive" src={this.props.imageUrl}/>
          <span className="neal-customer-quote-name">{this.props.children}</span>
      </div>
    );
  }
}
