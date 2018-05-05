import React from 'react';

export default class ViewMoreButton extends React.Component {


    render() {
        return (
              <button  onClick={this.props.onClick} type="button" className={this.props.css}>View More</button>
        );
    }
}
