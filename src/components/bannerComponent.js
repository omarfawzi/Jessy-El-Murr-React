import React from 'react';
import bannerService from "../services/bannerService";
import Banner from "./banner";
import WhiteLoader from "./whiteLoader";
import ScrollMore from "./scrollMore";

export default class bannerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photo: '', name: '', brief: '', job: '', loading: false, isClicked: false};
        bannerService.prototype.init();
    }

    componentDidMount() {
        bannerService.prototype.initComponent().then(result => {
            this.setState({
                photo: result.photo,
                name: result.name,
                brief: result.brief,
                job: result.job,
                loading: true
            });
        });
    }

    renderBanner() {
        return (
            <Banner photo={this.state.photo} name={this.state.name} brief={this.state.brief} job={this.state.job}/>
        );
    }

    updateBanner() {
        this.setState({loading: false});
        bannerService.prototype.updateComponent().then(result => {
            this.setState({brief: this.state.brief + result.brief, isClicked: true, loading: true});
        });
    }


    renderLoader() {
        if (this.state.loading === false) {
            return (
                <WhiteLoader/>
            );
        }
        else {
            return null;
        }
    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <ScrollMore onClick={this.updateBanner.bind(this)}/>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div className="background-gradient">
                <header className="default-header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="header-top d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="javascript:"><img src="/src/static/img/logo.png" alt=""/></a>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                        <img src="/src/static/img/Facebook-Logo.png" alt="" className="Facebook-icon"/>
                                    </a>
                                    <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                        <img src="/src/static/img/Twitter-Logo.png" alt=""/>
                                    </a>
                                    <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                        <img src="/src/static/img/Home-Icon.png" alt=""/>
                                    </a>
                                    <a href="#" className="btn-floating btn-sm btn-fb mx-1">
                                        <img src="/src/static/img/menu.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {this.renderBanner()}
                {this.renderLoader()}
                <div className={'row'}>
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}