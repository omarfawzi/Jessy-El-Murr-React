import React from 'react';

export default class StickViewMoreButton extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <button onClick={this.props.onClick} type="button"
                            className="btn-lg videos_viewMoreButton border-0">View More
                    </button>
                </div>
            </div>
        );
    }
}
