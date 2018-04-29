import React from 'react';
import ReactLoading from 'react-loading';

export default class Loader extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-centered">
                    <ReactLoading type={'bars'} color={'#6b15d3'} height={100} width={100} />
                </div>
            </div>
        );
    }
}
