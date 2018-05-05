import React from 'react';
import ProgressiveImage from "react-progressive-image";

export default class Testimonials extends React.Component {
    render() {
        return (
                        <figure className="snip1167">
                            <ProgressiveImage src={this.props.testimonial.photo}
                                              placeholder='/src/static/img/loader.gif'>
                                {(src) => <img src={src}
                                               alt='an image'/>}
                            </ProgressiveImage>
                            <img src="/src/static/img/ellipse-2-copy.png" alt="sq-sample3"
                                 className="quote-first-child"/>
                            <img src="/src/static/img/quotes.png" alt="sq-sample3" className="quote-second-child"/>
                            <blockquote>
                                <h1 className="Emma-Stone">{this.props.testimonial.name}</h1>
                                <p className="quotes-paragraph">{this.props.testimonial.bio}</p>
                            </blockquote>
                        </figure>
        );
    }
}
