import React from 'react';
import GuestsComponent from './guestsComponent';
import VideosComponent from './videosComponent';
import DailyTweetsComponent from './dailyTweetsComponent';
import TestimonialsComponent from './testimonialsComponent';
import BiographyComponent from './biographyComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <VideosComponent/>
                <BiographyComponent/>
                <DailyTweetsComponent/>
                <GuestsComponent/>
                <TestimonialsComponent/>
            </div>
        );
    }
}

export default App;
