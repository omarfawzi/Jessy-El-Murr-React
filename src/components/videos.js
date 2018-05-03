import React from 'react';
import Swiper from 'react-id-swiper';
import sliderSettings from './sliderSettings';

export default class Videos extends React.Component {

    constructor(props) {
        super(props);
    }

    log() {
        console.log('jeee');
    }

    render() {

        return (
            <div>
                <Swiper className="row videos-opacity videos-slider" {...sliderSettings}>
                    <div className="col-lg-4 col-md-4 padding-0">
                        <figure>
                            <img className="img-fluid videos-img" src="/src/static/img/layer-3.png" alt=""/>
                            <figcaption>
                                <div className="container container-opacity">
                                    <h1 className="video-title">Innovative Young Arabs</h1>
                                    <img className="video-img-first-child" src="/src/static/img/ellipse-2-copy.png"/>
                                    <img className="video-img-second-child"
                                         src="/src/static/img/vector-smart-object-copy-10.png"/>
                                    <span className="video-duration">02:00</span>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 padding-0">
                        <figure>
                            <img className="img-fluid videos-img" src="/src/static/img/layer-3.png" alt=""/>
                            <figcaption>
                                <div className="container container-opacity">
                                    <h1 className="video-title">Innovative Young Arabs</h1>
                                    <img className="video-img-first-child" src="/src/static/img/ellipse-2-copy.png"/>
                                    <img className="video-img-second-child"
                                         src="/src/static/img/vector-smart-object-copy-10.png"/>
                                    <span className="video-duration">02:00</span>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 padding-0">
                        <figure>
                            <img className="img-fluid videos-img" src="/src/static/img/layer-3.png" alt=""/>
                            <figcaption>
                                <div className="container container-opacity">
                                    <h1 className="video-title">Innovative Young Arabs</h1>
                                    <img className="video-img-first-child" src="/src/static/img/ellipse-2-copy.png"/>
                                    <img className="video-img-second-child"
                                         src="/src/static/img/vector-smart-object-copy-10.png"/>
                                    <span className="video-duration">02:00</span>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 padding-0">
                        <figure>
                            <img className="img-fluid videos-img" src="/src/static/img/layer-3.png" alt=""/>
                            <figcaption>
                                <div className="container container-opacity">
                                    <h1 className="video-title">Innovative Young Arabs</h1>
                                    <img className="video-img-first-child" src="/src/static/img/ellipse-2-copy.png"/>
                                    <img className="video-img-second-child"
                                         src="/src/static/img/vector-smart-object-copy-10.png"/>
                                    <span className="video-duration">02:00</span>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                </Swiper>
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<div className="row">*/}
                {/*<div id="videos_arrows" className="videos-arrows col-md-12">*/}

                {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
