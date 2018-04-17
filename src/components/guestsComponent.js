import React from 'react';
import GuestsCard from '../components/guestsCard';
import axios from 'axios';
import instance from '../services/config';
export default class GuestsComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = { guests:[] };
    }

  componentDidMount()
  {
      /*instance.get('/guests/get')
      .then((response) => this.setState({guests:response.data}))
      .catch((error)=> {this.renderError()});
      */
    instance.get('/guests/get')
    .then(function(response)
    {
      console.log(response.data);
    });
  }

  render() {
    return (
      <section className="blog-area section-gap">
          <div className="guests_bg">
              <div className="balls-center">
                  <div className="container">
                      <h2 className="guests_roseLeslie" style={{fontSize:'72px'}}>Guests</h2>
                      <div className="guests_guests_div">
                          <hr align="left" className="guests_firstLine"/>
                          <hr align="left" className="guests_secondLine"/>
                      </div>
                      <GuestsCard/>
                      <br/>
                      <br/>
                      <br/>
                      <button type="button" className="btn-lg guests_viewMoreButton border-0">View More</button>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
