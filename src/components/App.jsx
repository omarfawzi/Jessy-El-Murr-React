import React from 'react';
import BannerComponent from './bannerComponent'
import GuestsComponent from './guestsComponent';
import GalleryComponent from './galleryComponent';
import VideosComponent from './videosComponent';
import DailyTweetsComponent from './dailyTweetsComponent';
import TestimonialsComponent from './testimonialsComponent';
import BiographyComponent from './biographyComponent';
import FooterComponent from './footerComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <BannerComponent/>
                <BiographyComponent/>
                <VideosComponent/>
                <GuestsComponent/>
                <DailyTweetsComponent/>
                <GalleryComponent/>
                <TestimonialsComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
