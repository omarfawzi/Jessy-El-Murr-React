import React from 'react';
import GuestsComponent from './guestsComponent';
import VideosComponent from './videosComponent';
import DailyTweetsComponent from './dailyTweetsComponent';
import TestimonialsComponent from './testimonialsComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <VideosComponent/>
                <GuestsComponent/>
                <DailyTweetsComponent/>
                <TestimonialsComponent/>
            </div>
        );
    }
}

export default App;
