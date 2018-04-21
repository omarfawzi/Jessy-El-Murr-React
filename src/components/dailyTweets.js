import React from 'react';
import ProgressiveImage from "react-progressive-image";

export default class DailyTweets extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 ">
                <a href="#" className="d-block mb-4 h-100">
                    <div className="row">
                        <div className="col-centered">
                            <ProgressiveImage src={this.props.tweet.preview} placeholder='/src/static/img/loader.gif'>
                                {(src) => <img src={src} className="img-fluid Daily-Tweets-Episodes-video-img"
                                               alt='an image'/>}
                            </ProgressiveImage>
                            <img className="Daily-Tweets-Episodes-video-img-first-child"
                                 src="/src/static/img/ellipse-2-copy.png"/>
                            <img className="Daily-Tweets-Episodes-video-img-second-child"
                                 src="/src/static/img/vector-smart-object-copy-10.png"/>
                        </div>
                        <h1 className="Daily-Tweets-Episodes-video-title">{this.props.tweet.title}</h1>
                    </div>
                </a>
            </div>
        );
    }
}
