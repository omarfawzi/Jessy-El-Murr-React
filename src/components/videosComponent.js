import React from 'react';
import Videos from './videos';
import instance from '../services/config';

export default class VideosComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};
    }

    componentDidMount() {
        instance.get('/guests/get')
            .then(function (response) {
                console.log(response.data);
            });
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
            </section>
        );
    }
}
