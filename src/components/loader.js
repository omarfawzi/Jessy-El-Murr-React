import React from 'react';
import Loading from 'react-loading-components';

export default class Loader extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-centered">
                    <Loading type='bars' width={100} height={100} fill='#6b15d3'/>
                </div>
            </div>
        );
    }
}
