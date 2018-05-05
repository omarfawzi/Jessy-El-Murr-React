import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import subscribeService from "../services/subscribeService";
import toastr from 'reactjs-toastr';

export default class footerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: ''};
        this.handleChange = this.handleChange.bind(this);
        subscribeService.prototype.init();
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    subscribe() {
        subscribeService.prototype.subscribe(this.state.email).then(result => {
            console.log('hello');
            toastr.success('Successfully subscribed', 'Subscription', {displayDuration: 3000});
        });
    }


    render() {
        return (
            <div>
                <footer className="footer-area section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-centered">
                                <img src="/src/static/img/logo-mov.png" alt="" className="img-logo-mov"/>
                                <h1 className="get-in-touch">Get in touch </h1>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="single-footer-widget newsletter col-centered">
                                <div className="input-group mb-3">
                                    <input type="email" value={this.state.email} onChange={this.handleChange}
                                           placeholder="Your mail "/>
                                    <div className="input-group-append">
                                        <button onClick={this.subscribe.bind(this)}
                                                className="primary-btn text-center">Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom d-flex justify-content-between">
                        <div className="col-centered">
                            <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                <FontAwesomeIcon style={{fontSize: '35px', color: 'rgba(224, 224, 224, 1)'}}
                                                 icon={["fab", "facebook-square"]}/>
                            </a>
                            <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                <FontAwesomeIcon style={{fontSize: '35px', color: 'rgba(108, 18, 211, 1)'}}
                                                 icon={["fab", "twitter"]}/>
                            </a>
                            <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                <FontAwesomeIcon style={{fontSize: '35px', color: 'rgba(224, 224, 224, 1)'}}
                                                 icon="paper-plane"/>
                            </a>
                        </div>
                    </div>
                </footer>
                <div className="last-div"></div>
            </div>
        );
    }
}