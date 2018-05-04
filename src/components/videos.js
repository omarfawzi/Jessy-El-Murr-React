import React from 'react';
import Iframe from 'react-iframe'

export default class Videos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure>
                <Iframe url={this.props.video.link}
                        width={437}
                        height={300}
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                {/*<ProgressiveImage src={this.props.video.preview}*/}
                {/*placeholder='/src/static/img/loader.gif'>*/}
                {/*{(src) => <img src={src} className="img-fluid videos-img"*/}
                {/*alt='an image'/>}*/}
                {/*</ProgressiveImage>*/}
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
