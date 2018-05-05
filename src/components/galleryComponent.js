import React from 'react';
import Videos from './videos';
import StickViewMoreButton from "./stickViewMoreButton";
import galleryService from '../services/galleryService';
import WhiteLoader from "./whiteLoader";
import ViewMoreButton from './viewMoreButton';
import GalleryItem from './galleryItem';

export default class GalleryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {galleryItems: [], isClicked: false};
        galleryService.prototype.init();
    }

    componentDidMount() {
      galleryService.prototype.initComponent().then(result => {
          this.setState({galleryItems: result, isClicked: false});
      });
    }

    renderGalleryItems() {
        return (
            this.state.galleryItems.map(item => <GalleryItem key={item.id} item={item}/>)
        );
    }

    renderButton() {
        if (this.state.isClicked === false) {
            return (
                <ViewMoreButton onClick={this.updateGalleryItems.bind(this)} css={"btn-lg guests_viewMoreButton border-0 images-gallery-btn"}/>
            );
        }
        else {
            return null;
        }
    }

    updateGalleryItems() {
        galleryService.prototype.updateComponent().then(result => {
              this.setState({galleryItems: this.state.galleryItems.concat(result), isClicked: true});
        });
    }

    render() {
        return (
          <section className="gallery section-gap" id="gallery">
              <div className="container">
                    <div className="row">
                        <div className="col-md-8 pb-80 header-text">
                            <h4 className="biography">Images Gallery</h4>
                                <img src="/src/static/img/Biography_underline.png" className="Biography_underline"/>
                        </div>
                    </div>
                    <div className="row">
                      {this.renderGalleryItems()}
                    </div>
                    {this.renderButton()}
              </div>
          </section>
        );
    }
}
