import React from 'react';
import ReactLoading from 'react-loading';

export default class WhiteLoader extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-centered">
                    <ReactLoading type={'bars'} color={'#FFFFFF'} height={100} width={100} />
                </div>
            </div>
        );
    }
}
