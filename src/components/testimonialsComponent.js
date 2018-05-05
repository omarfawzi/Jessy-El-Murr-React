import React from 'react';
import Testimonials from './testimonials';
import Swiper from 'react-id-swiper';
import testimonialsService from '../services/testimonialsService';

export default class TestimonialsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {testimonials: [], isClicked: false};
        testimonialsService.prototype.init();
    }

    componentDidMount() {
      testimonialsService.prototype.initComponent().then(result => {
          this.setState({testimonials: result});
          this.goNext();
      });
    }

    renderTestimonials() {
        return (
            this.state.testimonials.map(testimonial =><div className="col-lg-4 col-md-4">
            <Testimonials key={testimonial.id} testimonial={testimonial}/>
            </div>)
        );
    }

    goNext() {
      this.swiper.slideNext();
    }

    goPrev() {
      this.swiper.slidePrev();
    }

    updateTestimonials() {
        testimonialsService.prototype.updateComponent().then(result => {
            this.setState({testimonials: this.state.testimonials.concat(result), isClicked: true});
        });
    }


    render() {
      let params = {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 0,
          shouldSwiperUpdate: true,
          on: {
              reachEnd: () => {
                  if (this.state.testimonials.length > 0 && this.state.isClicked === false) {
                      this.updateTestimonials()
                  }
              }
          },
          autoHeight: false,
          effect: 'coverflow'
        };

        return (
            <section className="testimonials-background section-gap" id="testimonials">
                <div className="balls-left">
                    <div className="container-fluid testimonials-container">
                        <div className="row">
                            <div className="col-md-8 pb-80 header-text">
                                <h4 className="testimonials">Testimonials</h4>
                                <img src="/src/static/img/rectangle-5-copy-5@2x.png"
                                     className="testimonials-first-child"/>
                                <img src="/src/static/img/rectangle-5-copy-5.png"
                                     className="testimonials-second-child"/>
                            </div>
                        </div>
                        <Swiper {...params} ref={node => {if (node) this.swiper = node.swiper}} className="row testimonials-opacity">
                            {this.renderTestimonials()}
                        </Swiper>
                        <div className="testimonials-arrows">
                            <img style={{cursor: 'pointer'}} className="btn-floating btn-sm btn-fb mx-1"
                                 onClick={()=>this.goPrev()} src="/src/static/img/arrow-left.png"/>

                            <img style={{cursor: 'pointer'}} className="btn-floating btn-sm btn-fb mx-1"
                                 onClick={()=>this.goNext()} src="/src/static/img/arrow-right.png"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
