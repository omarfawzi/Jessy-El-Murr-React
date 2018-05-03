import React from 'react';
import ProgressiveImage from "react-progressive-image";

export default class biographyCard extends React.Component {
  render() {
    return (
      <div id="Biography_div1">
        <ProgressiveImage src={this.props.photo}
                          placeholder='/src/static/img/loader.gif'>
            {(src) => <img src={src} alt="Avatar" id="Biography_avatar"/>}
        </ProgressiveImage>
        <div className="col-md-12 my-text">
          <h1 id="Biography_h1">{this.props.title}</h1>
          <pre id="Biography_pre">
                {this.props.bio}
          </pre>
        </div>
      </div>
    );
  }
}
