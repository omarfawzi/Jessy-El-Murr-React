import React from 'react';
import DailyTweets from './dailyTweets';
import StickViewMoreButton from "./stickViewMoreButton";
import dailyTweetsService from "../services/dailyTweetsService";
import WhiteLoader from "./whiteLoader";

export default class DailyTweetsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tweets: [], isClicked: false, loading: false};
        dailyTweetsService.prototype.init();
    }

    componentDidMount() {
        dailyTweetsService.prototype.initComponent().then(result => {
            this.setState({tweets: result, loading: true});
        });
    }

    updateDailyTweets() {
        this.setState({loading: false});
        dailyTweetsService.prototype.updateComponent().then(result => {
            this.setState({tweets: this.state.tweets.concat(result), isClicked: true, loading: true});
        });
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
            this.state.tweets.map(tweet => <DailyTweets key={tweet.id} tweet={tweet}/>)
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
                        {this.renderLoader()}
                        <div className="row">
                            {this.renderTweets()}
                        </div>
                    </div>
                </div>

                {this.renderButton()}

            </section>
        );
    }
}
