import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-center">
                        <div className="banner-content col-lg-6 col-md-12">
                            <h1 className="text-uppercase"> {this.props.name}</h1>
                            <h5> {this.props.job}</h5>
                            <img src="../static/img/Rectangle 5 copy.png" alt="" className="two-line img-logo"/><br/>
                            <p>
                                {this.props.brief}
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex align-self-end img-right">
                            <img className="img-fluid header-banner" src={this.props.photo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="banner-img"><img src="/src/static/img/lol.png" alt="" className="img-lines"/></div>
            </section>
        );
    }
}
