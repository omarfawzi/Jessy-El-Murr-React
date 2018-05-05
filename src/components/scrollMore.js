import React from 'react';

export default class ScrollMore extends React.Component {

    render() {
        return (
            <a href="javascript:" onClick={this.props.onClick} className="extend-banner col-centered">
                <img src="/src/static/img/ellipse-1-copy-4.png" className="extend-first-child"/>
                <img src="/src/static/img/vector-smart-object.png" className="extend-second-child"/>
            </a>
        );
    }
}
