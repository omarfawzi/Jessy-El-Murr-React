import React from 'react';

export default class ViewMoreButton extends React.Component {
  
    render() {
        return (
              <button  onClick={this.props.onClick} type="button" className="btn-lg guests_viewMoreButton border-0">View More</button>
        );
    }
}
