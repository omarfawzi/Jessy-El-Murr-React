import React from 'react';
import Videos from './videos';
import StickViewMoreButton from "./stickViewMoreButton";

export default class VideosComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {videos: [], isClicked: false};
    }

    componentDidMount() {

    }

    updateVideos() {

    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <StickViewMoreButton onClick={this.updateVideos.bind(this)}/>
            );
        }
        else {
            return null;
        }
    }

    renderVideos() {
        return (
            this.state.videos.map(video => <Videos key={video.id} guest={video}/>)
        );
    }

    render() {
        return (
            <section className="videos-background section-gap" id="videos">
                <div className="balls-left">
                    <div className="container-fluid videos-container">
                        <div className="row">
                            <div className="col-md-8 pb-80 header-text">
                                <h4 className="videos">Videos</h4>
                                <img src="/src/static/img/rectangle-5-copy-5@2x.png" className="videos-first-child"/>
                                <img src="/src/static/img/rectangle-5-copy-5.png"
                                     className="videos-second-child"/>
                            </div>
                        </div>

                        <Videos/>

                    </div>
                </div>

                {this.renderButton()}

            </section>
        );
    }
}
