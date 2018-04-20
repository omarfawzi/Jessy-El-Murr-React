import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class GuestsCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card guests_card_shadow border-0">
                        <div className="card-body text-center">
                            <p><img className="rounded img-fluid guests_card_image"
                                    src={"/src/static/img/guests_card_image.jpg"} alt="card image"/></p>
                            <h3 className="guests_roseLeslie">Rose Leslie</h3>
                            <h4 className="guests_movieActor">Movie actor</h4>
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
            </div>
        );
    }
}