import React from 'react';
import DailyTweets from './dailyTweets';
import instance from '../services/config';

export default class DailyTweetsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tweets: []};
    }

    componentDidMount() {
        instance.get('/guests/get')
            .then(function (response) {
                console.log(response.data);
            });
    }

    render() {
        return (
            <section className="Daily-Tweets-Episodes-background section-gap" id="daily-tweets-episodes">
                <div className="balls-left">
                    <div className="container daily-tweets-container">
                        <div className="row">
                            <div className="col-md-8 pb-80 header-text">
                                <h4 className="Daily-Tweets-Episodes">Daily Tweets Episodes</h4>
                                <img src="/src/static/img/rectangle-5-copy-5@2x.png"
                                     className="daily-tweets-first-child"/>
                                <img src="/src/static/img/rectangle-5-copy-5.png"
                                     className="daily-tweets-second-child"/>
                            </div>
                        </div>
                        <DailyTweets/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn-lg videos_viewMoreButton border-0">View More</button>
                    </div>
                </div>

            </section>
        );
    }
}
