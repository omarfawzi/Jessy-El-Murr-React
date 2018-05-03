import React from 'react';
import Testimonials from './testimonials';

export default class TestimonialsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tweets: []};
    }

    componentDidMount() {
        /*instance.get('/guests/get')
        .then((response) => this.setState({guests:response.data}))
        .catch((error)=> {this.renderError()});
        */
        // instance.get('/guests/get')
        //     .then(function (response) {
        //     });
    }

    render() {
        return (
            <section className="testimonials-background section-gap" id="testimonials">
                <div className="balls-left">
                    <div className="container-fluid testimonials-container">
                        <div className="row">
                            <div className="col-md-8 pb-80 header-text">
                                <h4 className="testimonials">Testimonials</h4>
                                <img src="/src/static/img/rectangle-5-copy-5@2x.png"
                                     className="testimonials-first-child"/>
                                <img src="/src/static/img/rectangle-5-copy-5.png"
                                     className="testimonials-second-child"/>
                            </div>
                        </div>
                        <Testimonials/>
                    </div>
                </div>
            </section>
        );
    }
}
