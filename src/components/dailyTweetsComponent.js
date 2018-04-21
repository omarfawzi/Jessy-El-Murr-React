import React from 'react';
import DailyTweets from './dailyTweets';
import StickViewMoreButton from "./stickViewMoreButton";

export default class DailyTweetsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tweets: [], isClicked: false};
    }

    componentDidMount() {

    }

    updateDailyTweets() {

    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <StickViewMoreButton onClick={this.updateDailyTweets.bind(this)}/>
            );
        }
        else {
            return null;
        }
    }

    renderTweets() {
        return (
            this.state.tweets.map(tweet => <DailyTweets key={tweet.id} guest={tweet}/>)
        );
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

                {this.renderButton()}

            </section>
        );
    }
}
