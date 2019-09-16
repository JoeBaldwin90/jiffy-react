import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const {loaded} = this.state
    return (
      <video
        className={`grid-item video ${loaded && "loaded"}`}
        autoPlay={true}
        loop={true}
        src={this.props.original.mp4}
        onLoadedData={() => this.setState({ loaded: true })}
      />
    );
  }
}

export default Gif;
