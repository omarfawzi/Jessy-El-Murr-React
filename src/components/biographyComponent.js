import React from 'react';
import biographyService from '../services/biographyService';
import BiographyCard from './biographyCard';
import ViewMoreButton from './viewMoreButton';
import Loader from "./loader";

export default class biographyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {photo: '', title: '', bio: '', loading: false, isClicked: false};
        biographyService.prototype.init();
    }

    componentDidMount() {
        biographyService.prototype.initComponent().then(result => {
            this.setState({photo: result.photo, title: result.title, bio: result.bio, loading: true});
        });
    }

    renderBiography() {
        if (this.state.loading === true) {
            return (
                <BiographyCard photo={this.state.photo} title={this.state.title} bio={this.state.bio}/>
            );
        }
        else {
            return null;
        }
    }

    updateBiography() {
        this.setState({loading: false});
        biographyService.prototype.updateComponent().then(result => {
            this.setState({bio: this.state.bio + result.bio, isClicked: true, loading: true});
        });
    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <ViewMoreButton onClick={this.updateBiography.bind(this)}/>
            );
        }
        else {
            return null;
        }
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

    render() {
        return (
            <section className="section-gap" id="biography">
                <div className="balls-center">
                    <div className="container" style={{position: 'relative'}}>
                        <div className="row">
                            <div className="col-md-8 pb-80 header-text">
                                <h4 className="biography">Biography</h4>
                                <div className="guests_guests_div">
                                    <hr align="left" className="guests_firstLine"/>
                                    <hr align="left" className="guests_secondLine"/>
                                </div>
                            </div>
                        </div>
                        {this.renderLoader()}
                        {this.renderBiography()}
                    </div>
                </div>
                {this.renderButton()}
            </section>
        );
    }
}
