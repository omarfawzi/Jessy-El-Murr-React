import React from 'react';
import Videos from './videos';
import StickViewMoreButton from "./stickViewMoreButton";
import videosService from '../services/videosService';
import Swiper from 'react-id-swiper';
import {getSettings} from '../config/videosSliderSettings';
import WhiteLoader from "./whiteLoader";


export default class VideosComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {videos: [], loadMore: false, isClicked: false, loading: false};
        videosService.prototype.init();
    }

    componentDidMount() {
      videosService.prototype.initComponent().then(result => {
          this.setState({videos: result, loading: true});
      });
    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <StickViewMoreButton/>
            );
        }
        else {
            return null;
        }
    }

    renderVideos() {
        return (
            this.state.videos.map(video => <div className="col-lg-4 col-md-4 padding-0">
            <Videos key={video.id} video={video}/>
            </div>)
        );
    }

    renderLoader() {
        if (this.state.loading === false) {
            return (
                <WhiteLoader/>
            );
        }
        else {
            return null;
        }
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
                        {this.renderLoader()}
                        <Swiper className="row videos-opacity" {...getSettings(this.state)}>
                            {this.renderVideos()}
                          </Swiper>
                    </div>
                </div>
                {this.renderButton()}
            </section>
        );
    }
}
