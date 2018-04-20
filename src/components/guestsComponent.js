import React from 'react';
import GuestsCard from './guestsCard';
import instance from '../services/config';
import ViewMoreButton from './viewMoreButton';

export default class GuestsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {initialData:[],backUpData:[],flag:false};
    }

    setContents(guests)
    {
      var inData = this.state.initialData;
      var backData = this.state.backUpData;
      for(var i = 0 ; i < guests.length ; i ++)
      {
        if(i<3)
        {
          inData.push(guests[i]);
        }
        else
        {
          backData.push(guests[i]);
        }
      }
      this.setState({initialData:inData,backUpData:backData});
    }

    componentDidMount() {
        instance.get('/guests/get')
            .then(response=>{
                this.setContents(response.data);
            });
    }

    renderGuests()
    {
      return(
        this.state.initialData.map(guest =><GuestsCard key={guest.guest_id} guest={guest}/>)
      );
    }

    updateGuests()
    {
      if(this.state.flag==false)
      {
        var backData = this.state.backUpData;
        var inData = this.state.initialData;
        var total = inData.concat(backData);
        this.setState({initialData:total,flag:true});
      }
    }

    render() {
        return (
            <section className="blog-area section-gap">
                <div className="guests_bg">
                    <div className="balls-center">
                        <div className="container">
                            <h2 className="guests_roseLeslie" style={{fontSize: '72px'}}>Guests</h2>
                            <div className="guests_guests_div">
                                <hr align="left" className="guests_firstLine"/>
                                <hr align="left" className="guests_secondLine"/>
                            </div>
                            <div className="row">
                              {this.renderGuests()}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <ViewMoreButton onClick={this.updateGuests.bind(this)} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
