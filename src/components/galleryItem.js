import React from 'react';
import ProgressiveImage from "react-progressive-image";

export default class GalleryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="col-lg-4 col-md-4 vol-wrap pb-2 pr-2 pl-2 pt-2">
              <div className="single-con">
                  <div className="content">
                      <div className="content-overlay"></div>
                      <ProgressiveImage src={this.props.item.photo}
                                        placeholder='/src/static/img/loader.gif'>
                          {(src) => <img src={src} className="gallery_images content-image img-fluid d-block mx-auto"
                                         alt='an image'/>}
                      </ProgressiveImage>
                      <div className="content-details fadeIn-bottom">
                          <h3>8/1</h3>
                          <h2>
                            {this.props.item.bio}
                          </h2>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
