import React from 'react';
import GuestsCard from './guestsCard';
import ViewMoreButton from './viewMoreButton';
import guestsService from '../services/guestsService';
import Loader from "./loader";


export default class GuestsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {guests: [], isClicked: false, loading: false};
        guestsService.prototype.init();
    }

    componentDidMount() {
        guestsService.prototype.initComponent().then(result => {
            this.setState({guests: result, loading: true});
        });
    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <ViewMoreButton css={"btn-lg guests_viewMoreButton border-0"} onClick={this.updateGuests.bind(this)}/>
            );
        }
        else {
            return null;
        }
    }

    renderGuests() {
        return (
            this.state.guests.map(guest => <GuestsCard key={guest.id} guest={guest}/>)
        );
    }

    renderLoader() {
        if (this.state.loading === false) {
            return (
                <Loader/>
            );
        }
        else {
            return null;
        }
    }

    updateGuests() {
        this.setState({loading: false});
        guestsService.prototype.updateComponent().then(result => {
            this.setState({guests: this.state.guests.concat(result), isClicked: true, loading: true});
        });
    }

    render() {
        return (
            <section className="blog-area section-gap">

                <div className="guests_bg">
                    <div className="balls-center">
                        <div className="container">
                            <h2 className="guests_roseLeslie" style={{fontSize: '72px'}}>Guests</h2>
                            <div className="guests_guests_div">
                                <hr align="left" className="guests_firstLine"/>
                                <hr align="left" className="guests_secondLine"/>
                            </div>
                            {this.renderLoader()}
                            <div className="row">
                                {this.renderGuests()}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            {this.renderButton()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
