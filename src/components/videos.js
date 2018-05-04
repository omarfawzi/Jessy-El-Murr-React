import React from 'react';
import Iframe from 'react-iframe'
import ProgressiveImage from "react-progressive-image";

export default class Videos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure>

                <ProgressiveImage src={this.props.video.preview}
                                  placeholder='/src/static/img/loader.gif'>
                    {(src) =>
                        <Iframe url={this.props.video.link}
                                width={437}
                                height={300}
                                position="relative"

                                allowFullScreen/>
                    }
                </ProgressiveImage>
                <figcaption>
                    <div className="container container-opacity">
                        <h1 className="video-title">{this.props.video.title}</h1>
                        <img className="video-img-first-child" src="/src/static/img/ellipse-2-copy.png"/>
                        <img className="video-img-second-child"
                             src="/src/static/img/vector-smart-object-copy-10.png"/>
                        <span className="video-duration">{this.props.video.duration}:00</span>
                    </div>
                </figcaption>
            </figure>
        );
    }
}
