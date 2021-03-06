import React, { Component } from "react";
import "../../css/Links.css";

class Links extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    if (this.props.hover) {
      this.setState(this.toggleHoverState);
    }
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div
        className="linksParentDiv"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <img src={this.props.source} alt={this.props.missing_source} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Links;
