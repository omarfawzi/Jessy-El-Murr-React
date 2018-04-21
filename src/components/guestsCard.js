import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ProgressiveImage from "react-progressive-image";

export default class GuestsCard extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 pb-2 pr-2 pl-2 pt-2">
                <div className="card guests_card_shadow border-0 card h-100">
                        <div className="card-body text-center">
                            <p>
                                <ProgressiveImage src={this.props.guest.guest_photo}
                                                  placeholder='/src/static/img/loader.gif'>
                                    {(src) => <img src={src} className="rounded img-fluid guests_card_image"
                                                   alt='an image'/>}
                                </ProgressiveImage>
                            </p>
                            <h3 className="guests_roseLeslie">{this.props.guest.guest_name}</h3>
                            <h4 className="guests_movieActor">{this.props.guest.guest_job}</h4>
                            <hr className="guests_firstLine"/>
                            <div className="text-center">
                                <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                    <FontAwesomeIcon style={{fontSize: '35px', color: '#E0E0E0'}}
                                                     icon={["fab", "facebook"]}/>
                                </a>
                                <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                    <FontAwesomeIcon style={{fontSize: '35px', color: 'rgba(108, 18, 211, 1)'}}
                                                     icon={["fab", "twitter"]}/>
                                </a>
                                <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                    <FontAwesomeIcon style={{fontSize: '35px', color: '#E0E0E0'}} icon="paper-plane"/>
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
        );
    }
}
