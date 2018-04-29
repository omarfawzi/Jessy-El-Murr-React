import React from 'react';

export default class NextArrow extends React.Component {
    render() {
        return (
            <a className={'nextArrow'} onClick={this.props.onClick} href="javascript:"><img
                src="/src/static/img/arrow-right.png"/></a>
        );
    }
}
