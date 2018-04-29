import React from 'react';

export default class PrevArrow extends React.Component {
    render() {
        return (
            <a className={'prevArrow'} onClick={this.props.onClick} href="javascript:"><img
                src="/src/static/img/vector-smart-object-copy-3.png"/></a>
        );
    }
}
