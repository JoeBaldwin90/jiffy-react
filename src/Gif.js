import React, { Component } from "react";

class Gif extends Component {
    render() {
        
        return (
          <video
            className="grid-item video"
            autoPlay={true}
            loop={true}
            src={this.props.original.mp4}
          />
        ); 
    }
}

export default Gif;